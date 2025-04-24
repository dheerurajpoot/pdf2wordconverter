import { NextRequest, NextResponse } from "next/server";
import { Document, Packer, Paragraph, TextRun } from "docx";

import { TextItem, TextMarkedContent } from 'pdfjs-dist/types/src/display/api';

type PDFTextContent = TextItem | TextMarkedContent;

// We'll dynamically import PDF.js to avoid issues with Next.js

export async function POST(req: NextRequest) {
	try {
		const formData = await req.formData();
		const file = formData.get("file") as File;

		if (!file) {
			return NextResponse.json(
				{ error: "No file provided" },
				{ status: 400 }
			);
		}

		// Read the PDF file and initialize PDF.js
		const arrayBuffer = await file.arrayBuffer();
		const pdfjsLib = await import("pdfjs-dist");

		// Configure worker
		if (typeof window === "undefined") {
			const worker = await import("pdfjs-dist/build/pdf.worker.mjs");
			pdfjsLib.GlobalWorkerOptions.workerSrc = worker.default;
		}

		// Load the PDF document
		const loadingTask = pdfjsLib.getDocument({
			data: new Uint8Array(arrayBuffer),
		});
		const pdf = await loadingTask.promise;

		// Create a new Word document
		let allParagraphs: Paragraph[] = [];

		// Extract text from each page
		for (let i = 1; i <= pdf.numPages; i++) {
			const page = await pdf.getPage(i);
			const content = await page.getTextContent();

			// Group text items by their vertical position with formatting
			const lineMap = new Map<
				number,
				{
					text: string;
					x: number;
					fontSize: number;
					fontFamily: string;
				}[]
			>();

			content.items.forEach((item: PDFTextContent) => {
				if (!('str' in item)) return; // Skip non-text items
				const y = Math.round(item.transform[5]);
				const x = Math.round(item.transform[4]);
				const fontSize = Math.round(
					Math.sqrt(
						item.transform[0] * item.transform[0] +
							item.transform[1] * item.transform[1]
					)
				);
				const fontFamily = item.fontName || "Arial";

				if (!lineMap.has(y)) {
					lineMap.set(y, []);
				}
				lineMap.get(y)?.push({
					text: item.str,
					x,
					fontSize,
					fontFamily,
				});
			});

			// Create paragraphs from lines with formatting
			const pageParagraphs = Array.from(lineMap.entries())
				.sort(([y1], [y2]) => y2 - y1)
				.map(([, items]) => {
					// Sort items by x position
					const sortedItems = items.sort((a, b) => a.x - b.x);

					// Create a paragraph with multiple text runs to preserve formatting
					return new Paragraph({
						spacing: {
							before: 100, // Add some spacing between paragraphs
							after: 100,
						},
						children: sortedItems.map(
							(item) =>
								new TextRun({
									text: item.text,
									size: item.fontSize * 2, // Convert PDF font size to Word points
									font: {
										name: item.fontFamily,
									},
									break: item.text.endsWith(" ") ? 1 : 0, // Preserve spaces
								})
						),
					});
				});

			allParagraphs = [...allParagraphs, ...pageParagraphs];
		}

		// Create the final document with all paragraphs
		const doc = new Document({
			sections: [
				{
					properties: {
						page: {
							margin: {
								top: 1440, // 1 inch in twips
								right: 1440,
								bottom: 1440,
								left: 1440,
							},
						},
					},
					children: allParagraphs,
				},
			],
		});

		// Generate Word document
		const buffer = await Packer.toBuffer(doc);

		// Return Word document
		return new NextResponse(buffer, {
			headers: {
				"Content-Type":
					"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
				"Content-Disposition": `attachment; filename="${file.name.replace(
					/\.pdf$/,
					".docx"
				)}"`,
			},
		});
	} catch (error) {
		console.error("Conversion error:", error);
		return NextResponse.json(
			{ error: "Conversion failed" },
			{ status: 500 }
		);
	}
}
