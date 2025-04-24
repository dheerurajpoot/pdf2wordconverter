import { ShieldCheckIcon, ZapIcon, LockIcon, SmileIcon, AppleIcon as DevicesIcon, FileTextIcon } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Our Converter?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our tool offers the best features to make document conversion simple, secure, and efficient.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 p-3">
              <ZapIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Fast Conversion</h3>
            <p className="text-center text-gray-500">
              Convert your documents in seconds with our high-speed processing.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 p-3">
              <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">100% Secure</h3>
            <p className="text-center text-gray-500">
              Your files are processed in your browser and never uploaded to our servers.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 p-3">
              <SmileIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Free to Use</h3>
            <p className="text-center text-gray-500">
              No hidden fees, no subscriptions. Convert as many documents as you need.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 p-3">
              <LockIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Privacy First</h3>
            <p className="text-center text-gray-500">No registration or email required. We respect your privacy.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 p-3">
              <DevicesIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Works Everywhere</h3>
            <p className="text-center text-gray-500">
              Use our tool on any device with a web browser. No installation needed.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="rounded-full bg-purple-100 p-3">
              <FileTextIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">High Quality</h3>
            <p className="text-center text-gray-500">Maintain the quality and formatting of your original documents.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
