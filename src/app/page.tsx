import type { Metadata } from "next"
import ConversionTool from "@/components/conversion-tool"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"

export const metadata: Metadata = {
  title: "PDF to Word & Word to PDF Converter | Free Online Tool",
  description: "Convert PDF to Word and Word to PDF online for free. No email required, no registration, 100% secure.",
  keywords:
    "pdf to word, word to pdf, convert pdf, convert word, free converter, online converter, document conversion",
  openGraph: {
    title: "PDF to Word & Word to PDF Converter | Free Online Tool",
    description:
      "Convert PDF to Word and Word to PDF online for free. No email required, no registration, 100% secure.",
    url: "https://pdfwordconverter.com",
    siteName: "PDF Word Converter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PDF Word Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <ConversionTool />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
