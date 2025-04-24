import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-white'>
			<div className='container mx-auto px-4 md:px-6'>
				<div className='flex flex-col items-center justify-center space-y-4 text-center'>
					<div className='space-y-2'>
						<div className='inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600'>
							FAQ
						</div>
						<h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
							Frequently Asked Questions
						</h2>
						<p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
							Find answers to common questions about our document
							converter.
						</p>
					</div>
				</div>
				<div className='mx-auto max-w-3xl space-y-4 py-12'>
					<Accordion type='single' collapsible className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger>
								Is this service really free?
							</AccordionTrigger>
							<AccordionContent>
								Yes, our PDF to Word and Word to PDF converter
								is completely free to use. There are no hidden
								fees, subscriptions, or limitations on the
								number of files you can convert.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-2'>
							<AccordionTrigger>
								How secure is my data?
							</AccordionTrigger>
							<AccordionContent>
								Your files are processed entirely in your
								browser and are never uploaded to our servers.
								We have no access to your documents, ensuring
								complete privacy and security.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-3'>
							<AccordionTrigger>
								Are there any file size limitations?
							</AccordionTrigger>
							<AccordionContent>
								Our tool can handle files up to 100MB in size.
								For larger files, we recommend splitting them
								into smaller documents before conversion.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-4'>
							<AccordionTrigger>
								Will the formatting be preserved?
							</AccordionTrigger>
							<AccordionContent>
								Our converter does its best to maintain the
								original formatting. However, complex layouts,
								custom fonts, or special elements might not
								convert perfectly. For most standard documents,
								the formatting will be well-preserved.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-5'>
							<AccordionTrigger>
								Do I need to create an account?
							</AccordionTrigger>
							<AccordionContent>
								No, you don't need to create an account or
								provide any personal information to use our
								converter. Simply upload your file and convert
								it instantly.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value='item-6'>
							<AccordionTrigger>
								Which file formats are supported?
							</AccordionTrigger>
							<AccordionContent>
								Our tool supports PDF to DOCX conversion and
								DOCX/DOC to PDF conversion. We're working on
								adding more formats in the future.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
}
