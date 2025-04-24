import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Terms of Service | PDF to Word & Word to PDF Converter",
	description:
		"Read our terms of service to understand the rules and guidelines for using our document conversion tools.",
	keywords:
		"terms of service, terms and conditions, legal, pdf converter, word converter",
};

export default function TermsPage() {
	return (
		<main className='flex min-h-screen flex-col'>
			<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
				<div className='container px-4 md:px-6'>
					<div className='flex flex-col items-center justify-center space-y-4 text-center'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
								Terms of Service
							</h1>
							<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
								Last updated: April 24, 2023
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
				<div className='container px-4 md:px-6'>
					<div className='mx-auto max-w-3xl space-y-8'>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								1. Introduction
							</h2>
							<p className='text-gray-500'>
								Welcome to PDF Word Converter
								(&quot;we&quot;,&quot;our&quot; or
								&quot;us&quot;). By accessing or using our
								website and services, you agree to be bound by
								these Terms of Service (&quot;Terms&quot;).
								Please read these Terms carefully.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								2. Use of Services
							</h2>
							<p className='text-gray-500'>
								Our services allow you to convert PDF documents
								to Word format and Word documents to PDF format.
								By using our services, you agree to:
							</p>
							<ul className='list-disc pl-6 text-gray-500 space-y-2'>
								<li>
									Use our services only for lawful purposes
									and in accordance with these Terms.
								</li>
								<li>
									Not use our services for any illegal or
									unauthorized purpose.
								</li>
								<li>
									Not attempt to probe, scan, or test the
									vulnerability of our system or network.
								</li>
								<li>
									Not interfere with or disrupt our services
									or servers.
								</li>
							</ul>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>3. Privacy</h2>
							<p className='text-gray-500'>
								Your privacy is important to us. Our{" "}
								<Link
									href='/privacy'
									className='text-purple-600 hover:underline'>
									Privacy Policy
								</Link>{" "}
								explains how we collect, use, and protect your
								information. By using our services, you agree to
								our Privacy Policy.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								4. Intellectual Property
							</h2>
							<p className='text-gray-500'>
								Our website and its original content, features,
								and functionality are owned by us and are
								protected by international copyright, trademark,
								patent, trade secret, and other intellectual
								property or proprietary rights laws.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								5. User Content
							</h2>
							<p className='text-gray-500'>
								You retain all rights to your content. By
								uploading content to our service, you grant us a
								non-exclusive, royalty-free license to use,
								store, and process your content solely for the
								purpose of providing our services to you.
							</p>
							<p className='text-gray-500'>
								We do not claim ownership of your content, and
								we will not use your content for any purpose
								other than to provide our services to you.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								6. Disclaimer of Warranties
							</h2>
							<p className='text-gray-500'>
								Our services are provided &quot;as is&quot; and
								&quot;as available&quot; without any warranties
								of any kind, either express or implied,
								including but not limited to the implied
								warranties of merchantability, fitness for a
								particular purpose, or non-infringement.
							</p>
							<p className='text-gray-500'>
								We do not warrant that our services will be
								uninterrupted or error-free, that defects will
								be corrected, or that our services or the server
								that makes it available are free of viruses or
								other harmful components.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								7. Limitation of Liability
							</h2>
							<p className='text-gray-500'>
								In no event shall we be liable for any indirect,
								incidental, special, consequential, or punitive
								damages, including without limitation, loss of
								profits, data, use, goodwill, or other
								intangible losses, resulting from your access to
								or use of or inability to access or use our
								services.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								8. Changes to Terms
							</h2>
							<p className='text-gray-500'>
								We reserve the right to modify or replace these
								Terms at any time. If a revision is material, we
								will provide at least 30 days&apos; notice prior
								to any new terms taking effect. What constitutes
								a material change will be determined at our sole
								discretion.
							</p>
						</div>

						<div className='space-y-4'>
							<h2 className='text-2xl font-bold'>
								9. Contact Us
							</h2>
							<p className='text-gray-500'>
								If you have any questions about these Terms,
								please{" "}
								<Link
									href='/contact'
									className='text-purple-600 hover:underline'>
									contact us
								</Link>
								.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
