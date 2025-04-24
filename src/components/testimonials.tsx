import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

export default function Testimonials() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-50'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600'>
							Testimonials
						</div>
						<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
							What Our Users Say
						</h2>
						<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Thousands of users trust our converter for their
							document needs.
						</p>
					</div>
				</div>
				<div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
					<Card>
						<CardContent className='p-6'>
							<QuoteIcon className='h-8 w-8 text-purple-300 mb-4' />
							<p className='text-gray-500 mb-4'>
								"This tool saved me so much time! I needed to
								convert multiple PDFs for work, and it was done
								in seconds."
							</p>
							<div className='flex items-center space-x-4'>
								<div className='rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center'>
									<span className='font-medium text-purple-600'>
										JD
									</span>
								</div>
								<div>
									<p className='font-medium'>John Doe</p>
									<p className='text-sm text-gray-500'>
										Marketing Manager
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<QuoteIcon className='h-8 w-8 text-purple-300 mb-4' />
							<p className='text-gray-500 mb-4'>
								"I was skeptical about free online converters,
								but this one actually works perfectly. The
								quality is excellent!"
							</p>
							<div className='flex items-center space-x-4'>
								<div className='rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center'>
									<span className='font-medium text-purple-600'>
										JS
									</span>
								</div>
								<div>
									<p className='font-medium'>Jane Smith</p>
									<p className='text-sm text-gray-500'>
										Teacher
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<QuoteIcon className='h-8 w-8 text-purple-300 mb-4' />
							<p className='text-gray-500 mb-4'>
								"As a student, I needed to convert my
								assignments frequently. This tool is a lifesaver
								and completely free!"
							</p>
							<div className='flex items-center space-x-4'>
								<div className='rounded-full bg-purple-100 w-10 h-10 flex items-center justify-center'>
									<span className='font-medium text-purple-600'>
										RJ
									</span>
								</div>
								<div>
									<p className='font-medium'>
										Robert Johnson
									</p>
									<p className='text-sm text-gray-500'>
										Student
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
