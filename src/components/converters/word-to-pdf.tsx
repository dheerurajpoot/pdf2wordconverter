"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileTextIcon, UploadIcon, DownloadIcon, AlertCircleIcon, CheckCircleIcon } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

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

      // Create form data
      const formData = new FormData()
      formData.append('file', file)

      // Send to API endpoint
      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Conversion failed')
      }

      setProgress(50)

      // Get PDF blob
      const blob = await response.blob()
      
      // Create download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = file.name.replace(/\.docx?$/, '.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)

      setSuccess(true)
      setProgress(100)
    } catch (err) {
      setError((err as Error).message)
      setConverting(false)
      setProgress(0)
    } finally {
      setConverting(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="word-file"
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <label
          htmlFor="word-file"
          className={cn(
            "flex min-h-[160px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 px-6 py-4 transition-colors hover:bg-gray-50",
            {
              "border-blue-600": file,
              "border-red-600": error,
            }
          )}
        >
          <div className="flex items-center space-x-2">
            <FileTextIcon className="h-4 w-4" />
            <span className="font-medium">Select Word Document</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {file ? file.name : "DOC, DOCX up to 10MB"}
          </p>
        </label>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertCircleIcon className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert variant="default" className="bg-green-50 text-green-700 border-green-200">
          <CheckCircleIcon className="h-4 w-4 text-green-600" />
          <AlertDescription>PDF created successfully!</AlertDescription>
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
