import { NextRequest, NextResponse } from 'next/server'
import puppeteer from 'puppeteer'
import mammoth from 'mammoth'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // Convert Word to HTML with improved options
    const buffer = Buffer.from(await file.arrayBuffer())
    const { value: html } = await mammoth.convertToHtml({ buffer }, {
      styleMap: [
        "p[style-name='Heading 1'] => h1:fresh",
        "p[style-name='Heading 2'] => h2:fresh",
        "p[style-name='Heading 3'] => h3:fresh",
        "p[style-name='Quote'] => blockquote:fresh",
        "r[style-name='Strong'] => strong",
        "r[style-name='Emphasis'] => em",
        "table => table",
        "p => p:fresh"
      ]
    })

    // Initialize Puppeteer
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    
    // Set viewport and content
    await page.setViewport({
      width: 794, // A4 width in pixels at 96 DPI
      height: 1123, // A4 height in pixels at 96 DPI
      deviceScaleFactor: 2 // For better quality
    })
    
    // Set content with improved styles
    await page.setContent(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Converted Document</title>
      </head>
      <body>${html}</body>
    </html>`, { waitUntil: 'networkidle0' })
    
    await page.addStyleTag({
      content: `
        @page {
          margin: 2.54cm;
          size: A4;
        }
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
        body {
          font-family: 'Times New Roman', serif;
          line-height: 1.15;
          margin: 0;
          padding: 0;
          color: #000;
          font-size: 12pt;
        }
        p { 
          margin: 0;
          padding: 6pt 0;
          text-align: justify;
          orphans: 2;
          widows: 2;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: bold;
          line-height: 1.2;
          page-break-after: avoid;
          page-break-inside: avoid;
          margin: 12pt 0 6pt 0;
        }
        h1 { font-size: 24pt; }
        h2 { font-size: 18pt; }
        h3 { font-size: 14pt; }
        h4 { font-size: 12pt; }
        ul, ol { 
          margin: 6pt 0; 
          padding-left: 1.5em;
          page-break-inside: avoid;
        }
        li {
          margin: 3pt 0;
        }
        table {
          border-collapse: collapse;
          margin: 12pt 0;
          width: 100%;
          page-break-inside: avoid;
        }
        td, th {
          border: 1pt solid #000;
          padding: 6pt;
          text-align: left;
          vertical-align: top;
        }
        th {
          font-weight: bold;
          background-color: #f5f5f5;
        }
        img {
          max-width: 100%;
          height: auto;
          page-break-inside: avoid;
        }
        blockquote {
          margin: 12pt 24pt;
          font-style: italic;
          page-break-inside: avoid;
        }
        strong { font-weight: bold; }
        em { font-style: italic; }
        a { color: #0000EE; text-decoration: underline; }
        .page-break {
          page-break-before: always;
        }
        pre, code {
          font-family: 'Courier New', monospace;
          background-color: #f5f5f5;
          padding: 6pt;
          margin: 6pt 0;
          white-space: pre-wrap;
          page-break-inside: avoid;
        }
      `
    })

    // Generate PDF with improved settings
    const pdf = await page.pdf({
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      margin: {
        top: '2.54cm',
        right: '2.54cm',
        bottom: '2.54cm',
        left: '2.54cm'
      },
      scale: 1.0,
      landscape: false,
      pageRanges: '',
      omitBackground: false,
      timeout: 30000
    })

    await browser.close()

    // Return PDF
    return new NextResponse(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${file.name.replace(/\.docx?$/, '.pdf')}"`,
      },
    })
  } catch (error) {
    console.error('Conversion error:', error)
    return NextResponse.json({ error: 'Conversion failed' }, { status: 500 })
  }
}
