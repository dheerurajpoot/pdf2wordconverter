import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export default function CTA() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-purple-600'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h2 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl'>
							Ready to Convert Your Documents?
						</h2>
						<p className='mx-auto max-w-[700px] text-white/80 md:text-xl'>
							Our free tool makes it easy to convert between PDF
							and Word formats. No registration required.
						</p>
					</div>
					<div className='flex flex-col gap-2 min-[400px]:flex-row'>
						<Button
							asChild
							size='lg'
							className='bg-white text-purple-600 hover:bg-gray-100'>
							<Link href='#conversion-tool'>
								Start Converting Now
								<ArrowRightIcon className='ml-2 h-4 w-4' />
							</Link>
						</Button>
						<Button
							asChild
							variant='outline'
							size='lg'
							className='border-white text-white hover:bg-purple-700'>
							<Link href='/contact'>Contact Us</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
