"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { FileIcon, FileTextIcon } from "lucide-react";
import PDFToWord from "./converters/pdf-to-word";
import WordToPDF from "./converters/word-to-pdf";

export default function ConversionTool() {
	const [activeTab, setActiveTab] = useState("pdf-to-word");

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Convert Your Documents
						</h2>
						<p className='max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Fast, secure, and free document conversion. No email
							required.
						</p>
					</div>

					<div className='w-full max-w-3xl mx-auto mt-8'>
						<Tabs
							defaultValue='pdf-to-word'
							value={activeTab}
							onValueChange={setActiveTab}
							className='w-full'>
							<TabsList className='grid w-full grid-cols-2 mb-8'>
								<TabsTrigger
									value='pdf-to-word'
									className='text-base'>
									<FileTextIcon className='w-4 h-4 mr-2' />
									PDF to Word
								</TabsTrigger>
								<TabsTrigger
									value='word-to-pdf'
									className='text-base'>
									<FileIcon className='w-4 h-4 mr-2' />
									Word to PDF
								</TabsTrigger>
							</TabsList>

							<Card className='border-2 border-purple-100 shadow-lg'>
								<CardContent className='p-6'>
									<TabsContent
										value='pdf-to-word'
										className='mt-0'>
										<PDFToWord />
									</TabsContent>
									<TabsContent
										value='word-to-pdf'
										className='mt-0'>
										<WordToPDF />
									</TabsContent>
								</CardContent>
							</Card>
						</Tabs>
					</div>
				</div>
			</div>
		</section>
	);
}
