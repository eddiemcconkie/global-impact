import clsx from 'clsx';
import { LayoutGrid, ShoppingBag, User, Video, Wallet } from 'lucide-react';
import { headers } from 'next/headers';
import Link from 'next/link';

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = (await headers()).get('x-pathname');

	const navLinks = [
		{ label: 'News', path: '/news', icon: LayoutGrid },
		{ label: 'Videos', path: '/videos', icon: Video },
		{ label: 'Wallet', path: '/wallet', icon: Wallet },
		{ label: 'Stores', path: '/stores', icon: ShoppingBag },
		{ label: 'Profile', path: '/profile', icon: User },
	];

	return (
		<>
			<nav className="shadow-menu fixed top-auto bottom-0 w-full rounded-t-2xl bg-white/75 p-2 pt-3 backdrop-blur-2xl">
				<ul className="flex justify-around">
					{navLinks.map((link, i) => (
						<li key={i}>
							<Link
								href={link.path}
								className={clsx(
									'flex flex-col items-center gap-1 transition-colors',
									link.path === pathname
										? 'text-primary-500 active:text-primary-600 hover:text-primary-600'
										: 'text-secondary-200 active:text-secondary-300 hover:text-secondary-300',
								)}
							>
								<link.icon size={18} />
								<span className="text-sm">{link.label}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<main className="bg-background flex min-h-dvh flex-col gap-6 p-6 pt-8 pb-20">
				{children}
			</main>
		</>
	);
}
