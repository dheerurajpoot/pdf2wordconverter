import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export default function Hero() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-purple-50 to-white'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
					<div className='flex flex-col justify-center space-y-4'>
						<div className='space-y-2'>
							<h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
								Convert PDF to Word & Word to PDF{" "}
								<span className='text-purple-600'>
									Instantly
								</span>
							</h1>
							<p className='max-w-[600px] text-gray-500 md:text-xl'>
								Free online document converter. No email
								required, no registration, 100% secure.
							</p>
						</div>
						<div className='flex flex-col gap-2 min-[400px]:flex-row'>
							<Button
								asChild
								size='lg'
								className='bg-purple-600 hover:bg-purple-700'>
								<Link href='#conversion-tool'>
									Start Converting
									<ArrowDownIcon className='ml-2 h-4 w-4' />
								</Link>
							</Button>
							<Button asChild variant='outline' size='lg'>
								<Link href='/about'>Learn More</Link>
							</Button>
						</div>
					</div>
					<img
						alt='Document Conversion'
						className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last'
						height='310'
						src='/home.jpg?height=620&width=1200'
						width='550'
					/>
				</div>
			</div>
		</section>
	);
}
