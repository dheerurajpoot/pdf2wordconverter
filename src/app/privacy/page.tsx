import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | PDF to Word & Word to PDF Converter",
  description: "Learn how we protect your privacy and handle your data when using our document conversion tools.",
  keywords: "privacy policy, data protection, security, pdf converter, word converter",
}

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Last updated: April 24, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-gray-500">
                At PDF Word Converter, we respect your privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we look after your personal data when you visit our website and
                tell you about your privacy rights and how the law protects you.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">2. The Data We Collect</h2>
              <p className="text-gray-500">
                Our document conversion service processes your files directly in your browser. This means:
              </p>
              <ul className="list-disc pl-6 text-gray-500 space-y-2">
                <li>Your files are never uploaded to our servers.</li>
                <li>We do not have access to the content of your documents.</li>
                <li>All processing happens locally on your device.</li>
              </ul>
              <p className="text-gray-500 mt-4">We may collect anonymous usage data such as:</p>
              <ul className="list-disc pl-6 text-gray-500 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referral source</li>
                <li>Length of visit, page views, website navigation</li>
                <li>Anonymized information about how you use our website</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">3. How We Use Your Data</h2>
              <p className="text-gray-500">We use the anonymous usage data we collect to:</p>
              <ul className="list-disc pl-6 text-gray-500 space-y-2">
                <li>Improve our website and services</li>
                <li>Administer our website</li>
                <li>Analyze usage patterns</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">4. Cookies</h2>
              <p className="text-gray-500">
                We use cookies to distinguish you from other users of our website. This helps us to provide you with a
                good experience when you browse our website and also allows us to improve our site.
              </p>
              <p className="text-gray-500">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or
                access cookies. If you disable or refuse cookies, please note that some parts of this website may become
                inaccessible or not function properly.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">5. Data Security</h2>
              <p className="text-gray-500">
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed.
              </p>
              <p className="text-gray-500">
                We limit access to your personal data to those employees, agents, contractors, and other third parties
                who have a business need to know. They will only process your personal data on our instructions, and
                they are subject to a duty of confidentiality.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">6. Your Legal Rights</h2>
              <p className="text-gray-500">
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-500 space-y-2">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
                <li>Request transfer of your personal data</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p className="text-gray-500 mt-4">If you wish to exercise any of these rights, please contact us.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">7. Third-Party Links</h2>
              <p className="text-gray-500">
                This website may include links to third-party websites, plug-ins, and applications. Clicking on those
                links or enabling those connections may allow third parties to collect or share data about you. We do
                not control these third-party websites and are not responsible for their privacy statements. When you
                leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">8. Changes to the Privacy Policy</h2>
              <p className="text-gray-500">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "last updated" date at the top of this privacy policy.
              </p>
              <p className="text-gray-500">
                You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                policy are effective when they are posted on this page.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">9. Contact Us</h2>
              <p className="text-gray-500">
                If you have any questions about this privacy policy, please{" "}
                <Link href="/contact" className="text-purple-600 hover:underline">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
