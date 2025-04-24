import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | PDF to Word & Word to PDF Converter",
  description: "Get in touch with our team for support, feedback, or business inquiries.",
  keywords: "contact, support, help, feedback, pdf converter, word converter",
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to hear from you. Reach out with questions, feedback, or support requests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          First name
                        </label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Last name
                        </label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" placeholder="john.doe@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <Textarea className="min-h-[150px]" id="message" placeholder="Enter your message" />
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Information</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are the ways you can reach us.
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MailIcon className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <CardTitle className="text-xl">Email</CardTitle>
                      <CardDescription className="text-gray-500 mt-2">support@pdfwordconverter.com</CardDescription>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <PhoneIcon className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <CardTitle className="text-xl">Phone</CardTitle>
                      <CardDescription className="text-gray-500 mt-2">+1 (555) 123-4567</CardDescription>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPinIcon className="h-6 w-6 text-purple-600 mt-1" />
                    <div>
                      <CardTitle className="text-xl">Office</CardTitle>
                      <CardDescription className="text-gray-500 mt-2">
                        123 Conversion Street
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                      </CardDescription>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-gray-500">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM EST</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM EST</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
