"use client"

import { cn } from "@/lib/utils"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileTextIcon, UploadIcon, DownloadIcon, AlertCircleIcon, CheckCircleIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Document, Packer, Paragraph, TextRun } from "docx"

// Import PDF.js
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/legacy/build/pdf';

// Initialize PDF.js only on the client side
if (typeof window !== 'undefined') {
  // Use unpkg CDN which always has the correct versions
  GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@4.0.189/legacy/build/pdf.worker.min.js`;
}

export default function PDFToWord() {
  const [file, setFile] = useState<File | null>(null)
  const [converting, setConverting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile)
      setError(null)
      setSuccess(false)
    } else {
      setFile(null)
      setError("Please select a valid PDF file")
    }
  }

  const convertToWord = async () => {
    if (!file) return

    try {
      setConverting(true)
      setProgress(10)
      setError(null)

      // Load the PDF file
      const arrayBuffer = await file.arrayBuffer()
      setProgress(30)

      // Initialize PDF.js and load the PDF document
      const loadingTask = getDocument({ data: new Uint8Array(arrayBuffer) })
      const pdf = await loadingTask.promise
      setProgress(50)

      // Extract text from each page and maintain formatting
      let paragraphs: Paragraph[] = []

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i)
        const content = await page.getTextContent()
        const viewport = await page.getViewport({ scale: 1.0 })

        // Group items by their vertical position to maintain lines
        const lineMap = new Map<number, any[]>()
        content.items.forEach((item: any) => {
          const y = Math.round(item.transform[5])
          if (!lineMap.has(y)) {
            lineMap.set(y, [])
          }
          lineMap.get(y)?.push(item)
        })

        // Sort lines from top to bottom
        const sortedLines = Array.from(lineMap.entries())
          .sort((a, b) => b[0] - a[0])

        // Process each line
        for (const [_, lineItems] of sortedLines) {
          // Sort items in line from left to right
          lineItems.sort((a: any, b: any) => a.transform[4] - b.transform[4])

          // Combine all text in the line
          const text = lineItems.map((item: any) => item.str).join('').trim()
          if (!text) continue

          // Get properties of the first item in line for styling
          const firstItem = lineItems[0]
          const fontSize = Math.round(firstItem.height * 0.8)
          const isHeading = fontSize > 14
          const isBold = firstItem.fontName?.toLowerCase().includes('bold')

          // Create paragraph with appropriate styling
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text,
                  bold: isBold || isHeading,
                  size: fontSize * 2, // Convert PDF points to Word points
                })
              ],
              spacing: {
                before: 120,
                after: 120,
                line: 360
              },
              indent: firstItem.transform[4] > 100 ? { left: 720 } : undefined // Indent if x position > 100
            })
          )
        }
      }

      // Create the document with all paragraphs
      const doc = new Document({
        sections: [{
          properties: {},
          children: paragraphs
        }]
      })

      // Generate the Word document
      setProgress(90)
      const blob = await Packer.toBlob(doc)

      // Create a download link
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = file.name.replace(".pdf", ".docx")
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
            htmlFor="pdf-dropzone"
            className={cn(
              "flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100",
              file ? "border-purple-300" : "border-gray-300",
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {file ? (
                <div className="flex flex-col items-center text-center">
                  <FileTextIcon className="w-12 h-12 mb-3 text-purple-500" />
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
                  <p className="text-xs text-gray-500">PDF (MAX. 100MB)</p>
                </div>
              )}
            </div>
            <input
              id="pdf-dropzone"
              type="file"
              className="hidden"
              accept=".pdf,application/pdf"
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
        onClick={convertToWord}
        disabled={!file || converting}
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        {converting ? (
          <span className="flex items-center">Converting...</span>
        ) : (
          <span className="flex items-center">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Convert to Word
          </span>
        )}
      </Button>
    </div>
  )
}
