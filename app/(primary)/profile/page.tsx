import { Card } from '@/components/card';
import { PageHeader } from '@/components/page-header';
import clsx from 'clsx';
import {
	Bell,
	Book,
	CircleQuestionMark,
	List,
	LogOut,
	Settings,
	User,
} from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
	const links = [
		{ label: 'Biography', path: '/biography', icon: User },
		{ label: 'Notifications', path: '/notifications', icon: Bell },
		{ label: 'Purchase History', path: '/purchase', icon: List },
		{ label: 'Settings', path: '/settings', icon: Settings },
		{ label: 'Privacy Policy', path: '/privacy', icon: Book },
		{ label: 'Help & Support', path: '/support', icon: CircleQuestionMark },
		{ label: 'Logout', path: '/logout', icon: LogOut },
	];

	return (
		<>
			<PageHeader pageName="Profile" />
			<div className="grid grid-cols-1 grid-rows-[--spacing(7.5)_auto]">
				<img
					src="https://randomuser.me/api/portraits/men/51.jpg"
					alt=""
					className="z-1 col-start-1 row-span-2 row-start-1 size-15 self-start justify-self-center rounded-full"
				/>
				<div className="col-start-1 row-start-2">
					<Card>
						<div className="mt-3 text-center">
							<p className="text-secondary-500 text-lg font-bold">
								Eddie McConkie
							</p>
							<p className="text-secondary-400">edwardmcconkie@gmail.com</p>
						</div>

						<ul>
							{links.map((link, i) => (
								<li key={link.path}>
									<Link
										href={link.path}
										className={clsx(
											'border-secondary-100 hover:bg-secondary-100 active:bg-secondary-100 flex items-center gap-3 py-2',
											i > 0 && 'border-t-1',
										)}
									>
										<link.icon className="text-primary-400 m-1.5" />
										<span className="text-secondary-500 font-medium">
											{link.label}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</Card>
				</div>
			</div>
			{/* <div className="grid grid-cols-1 grid-rows-[--spacing(7.5)_auto]">
				<img
					src="https://randomuser.me/api/portraits/men/73.jpg"
					alt=""
					className="z-10 col-start-1 row-span-2 row-start-1 size-15 self-start justify-self-center"
				/>
				<div className="col-start-1 row-start-2">
					<Card>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
							earum tempore repudiandae consectetur eos, asperiores deserunt
							vitae, sit maxime necessitatibus autem excepturi consequatur, nisi
							expedita ea sint quae quia tempora neque? Expedita tempora aliquam
							neque dicta ipsum, in, accusantium quae a recusandae dignissimos
							autem libero error nemo quaerat ullam voluptate commodi ipsa eos
							sit rem accusamus animi fugit! At recusandae adipisci nisi autem
							ullam possimus, dolore voluptas vel eos quibusdam, natus dolor
							nesciunt, doloribus odio! Quibusdam velit nostrum magni doloribus
							iusto soluta beatae odit repellat, voluptatum expedita distinctio
							in recusandae commodi accusantium veritatis ducimus molestias sint
							reprehenderit necessitatibus ex.
						</p>
					</Card>
				</div>
			</div> */}
		</>
	);
}
