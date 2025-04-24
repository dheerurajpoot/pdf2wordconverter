"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
				<Link href='/' className='flex items-center space-x-2'>
					<span className='text-2xl font-bold text-purple-600'>
						PDF2Word
					</span>
				</Link>
				<nav className='hidden md:flex gap-6'>
					<Link
						href='/'
						className='text-sm font-medium transition-colors hover:text-purple-600'>
						Home
					</Link>
					<Link
						href='/about'
						className='text-sm font-medium transition-colors hover:text-purple-600'>
						About
					</Link>
					<Link
						href='/contact'
						className='text-sm font-medium transition-colors hover:text-purple-600'>
						Contact
					</Link>
					<Link
						href='/terms'
						className='text-sm font-medium transition-colors hover:text-purple-600'>
						Terms
					</Link>
					<Link
						href='/privacy'
						className='text-sm font-medium transition-colors hover:text-purple-600'>
						Privacy
					</Link>
				</nav>
				<div className='hidden md:flex gap-4'>
					<Button asChild variant='ghost' size='sm'>
						<Link href='/#conversion-tool'>Start Converting</Link>
					</Button>
				</div>
				<button
					className='flex items-center justify-center rounded-md p-2 text-foreground md:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? (
						<XIcon className='h-6 w-6' />
					) : (
						<MenuIcon className='h-6 w-6' />
					)}
					<span className='sr-only'>Toggle menu</span>
				</button>
			</div>
			{isMenuOpen && (
				<div className='container md:hidden'>
					<nav className='flex flex-col gap-4 p-4'>
						<Link
							href='/'
							className='text-sm font-medium transition-colors hover:text-purple-600'
							onClick={() => setIsMenuOpen(false)}>
							Home
						</Link>
						<Link
							href='/about'
							className='text-sm font-medium transition-colors hover:text-purple-600'
							onClick={() => setIsMenuOpen(false)}>
							About
						</Link>
						<Link
							href='/contact'
							className='text-sm font-medium transition-colors hover:text-purple-600'
							onClick={() => setIsMenuOpen(false)}>
							Contact
						</Link>
						<Link
							href='/terms'
							className='text-sm font-medium transition-colors hover:text-purple-600'
							onClick={() => setIsMenuOpen(false)}>
							Terms
						</Link>
						<Link
							href='/privacy'
							className='text-sm font-medium transition-colors hover:text-purple-600'
							onClick={() => setIsMenuOpen(false)}>
							Privacy
						</Link>
						<Button
							asChild
							variant='default'
							size='sm'
							className='w-full bg-purple-600 hover:bg-purple-700'
							onClick={() => setIsMenuOpen(false)}>
							<Link href='/#conversion-tool'>
								Start Converting
							</Link>
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
