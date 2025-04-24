"use client"

import { cn } from "@/lib/utils"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileIcon, UploadIcon, DownloadIcon, AlertCircleIcon, CheckCircleIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import mammoth from "mammoth"

export default function WordToPDF() {
  const [file, setFile] = useState<File | null>(null)
  const [converting, setConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (
      selectedFile &&
      (selectedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        selectedFile.type === "application/msword")
    ) {
      setFile(selectedFile)
      setError(null)
      setSuccess(false)
    } else {
      setFile(null)
      setError("Please select a valid Word document (.doc or .docx)")
    }
  }

  const convertToPDF = async () => {
    if (!file) return

    try {
      setConverting(true)
      setProgress(10)
      setError(null)

      // Read the Word file
      const arrayBuffer = await file.arrayBuffer()
      setProgress(30)

      // Convert Word to HTML with styles using mammoth
      const result = await mammoth.convertToHtml({ arrayBuffer }, {
        styleMap: [
          "p[style-name='Heading 1'] => h1.section-heading:fresh",
          "p[style-name='Heading 2'] => h2.section-heading:fresh",
          "p[style-name='Heading 3'] => h3.section-heading:fresh",
          "b => b:fresh",
          "i => i:fresh",
          "u => u:fresh",
          "strike => strike:fresh",
          "p => p:fresh",
          "r[style-name='Hyperlink'] => a:fresh"
        ]
      })
      const html = result.value
      setProgress(50)

      // Create a new PDF document
      const pdfDoc = await PDFDocument.create()
      let page = pdfDoc.addPage([612, 792]) // Letter size

      // Embed multiple fonts for different styles
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
      const timesBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold)
      const timesItalicFont = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic)
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

      // Parse HTML content
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      let yOffset = 750 // Start from top of page
      const margin = 50
      const pageWidth = 612
      const contentWidth = pageWidth - 2 * margin

      // Function to process text with proper styling
      const drawStyledText = (text: string, x: number, y: number, options: any = {}) => {
        const {
          fontSize = 11,
          font = timesRomanFont,
          color = rgb(0, 0, 0),
          indent = 0,
          isLink = false,
          isBullet = false
        } = options

        // Draw bullet point if needed
        if (isBullet) {
          page.drawText('•', {
            x: x - 15,
            y,
            size: fontSize,
            font
          })
        }

        // Draw text
        page.drawText(text, {
          x: x + indent,
          y,
          size: fontSize,
          font,
          color: isLink ? rgb(0, 0, 1) : color,
          maxWidth: contentWidth - indent
        })

        // Draw underline for links
        if (isLink) {
          const textWidth = font.widthOfTextAtSize(text, fontSize)
          page.drawLine({
            start: { x: x + indent, y: y - 2 },
            end: { x: x + indent + textWidth, y: y - 2 },
            thickness: 1,
            color: rgb(0, 0, 1)
          })
        }

        return font.heightAtSize(fontSize) + 8
      }

      // Process the content
      const processNode = (node: Element, x = margin, y = yOffset, level = 0) => {
        let currentY = y
        const nodeName = node.nodeName.toLowerCase()

        // Handle different types of content
        if (nodeName === 'h1') {
          // Main heading (name)
          currentY -= drawStyledText(node.textContent || '', x, currentY, {
            fontSize: 24,
            font: helveticaBold
          })
          currentY -= 10 // Extra spacing after name
        } else if (nodeName === 'h2' || node.classList.contains('section-heading')) {
          // Section headings
          currentY -= 15 // Space before section
          currentY -= drawStyledText(node.textContent || '', x, currentY, {
            fontSize: 16,
            font: helveticaBold,
            color: rgb(0.4, 0, 0.6)
          })
          currentY -= 10
        } else if (nodeName === 'a') {
          // Links
          currentY -= drawStyledText(node.textContent || '', x, currentY, {
            isLink: true,
            font: helveticaFont
          })
        } else if (nodeName === 'li') {
          // Bullet points
          currentY -= drawStyledText(node.textContent || '', x + 20, currentY, {
            isBullet: true,
            font: helveticaFont
          })
        } else if (node.textContent?.trim()) {
          // Regular text
          currentY -= drawStyledText(node.textContent, x, currentY, {
            font: helveticaFont
          })
        }

        // Process child nodes
        Array.from(node.children).forEach(child => {
          currentY = processNode(child as Element, x, currentY, level + 1)
        })

        // Add a new page if needed
        if (currentY < margin) {
          page = pdfDoc.addPage([612, 792])
          currentY = 750
        }

        return currentY
      }

      // Start processing from the body
      processNode(doc.body)
      

      // Save the PDF
      setProgress(90)
      const pdfBytes = await pdfDoc.save()
      const blob = new Blob([pdfBytes], { type: "application/pdf" })

      // Create a download link
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = file.name.replace(/\.(docx|doc)$/, ".pdf")
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      setProgress(100)
      setSuccess(true)
      setTimeout(() => {
        setConverting(false)
        setProgress(0)
      }, 1000)
    } catch (err) {
      console.error(err)
      setError("An error occurred during conversion. Please try again.")
      setConverting(false)
      setProgress(0)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="word-dropzone"
            className={cn(
              "flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",
              file ? "border-purple-300" : "border-gray-300",
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {file ? (
                <div className="flex flex-col items-center text-center">
                  <FileIcon className="w-12 h-12 mb-3 text-purple-500" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">{file.name}</span>
                  </p>
                  <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center">
                  <UploadIcon className="w-10 h-10 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">Word Document (MAX. 100MB)</p>
                </div>
              )}
            </div>
            <input
              id="word-dropzone"
              type="file"
              className="hidden"
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              disabled={converting}
            />
          </label>
        </div>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircleIcon className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-600">
            Conversion successful! Your file has been downloaded.
          </AlertDescription>
        </Alert>
      )}

      {converting && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Converting...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}

      <Button
        onClick={convertToPDF}
        disabled={!file || converting}
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        {converting ? (
          <span className="flex items-center">Converting...</span>
        ) : (
          <span className="flex items-center">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Convert to PDF
          </span>
        )}
      </Button>
    </div>
  )
}
