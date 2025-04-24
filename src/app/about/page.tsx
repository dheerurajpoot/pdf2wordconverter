import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | PDF to Word & Word to PDF Converter",
  description: "Learn about our mission to provide free, secure document conversion tools for everyone.",
  keywords: "about us, pdf converter, word converter, document conversion, free tools",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to make document conversion accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why We Built This Tool</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We created this PDF to Word and Word to PDF converter because we believe that everyone should have
                access to simple, free tools for everyday document needs. Our team of developers and designers has
                worked hard to create a user-friendly experience that prioritizes privacy and security.
              </p>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Unlike many other converters, our tool processes your documents directly in your browser. This means
                your files never leave your computer, ensuring complete privacy and security.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What We Stand For</h2>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-purple-600"></div>
                  <p>
                    <strong>Accessibility:</strong> We believe that essential tools should be available to everyone,
                    regardless of budget.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-purple-600"></div>
                  <p>
                    <strong>Privacy:</strong> Your data belongs to you. We process everything locally in your browser.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-purple-600"></div>
                  <p>
                    <strong>Simplicity:</strong> We focus on creating tools that are easy to use without sacrificing
                    functionality.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-purple-600"></div>
                  <p>
                    <strong>Quality:</strong> We strive to maintain the highest quality in our conversion results.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Try Our Converter?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experience the simplicity and efficiency of our document converter.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/">
                  Start Converting
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
