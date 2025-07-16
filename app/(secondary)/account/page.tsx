import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { PageHeader } from '@/components/page-header';
import { getMyAccounts } from '@/data/redis';
import { ArrowRight, Plus } from 'lucide-react';

import Link from 'next/link';

export default async function AccountPage() {
	const myAccounts = await getMyAccounts();

	return (
		<>
			<PageHeader backlink="/wallet" />
			<Card>
				<p className="text-secondary-300 text-sm font-medium">Bank Accounts</p>

				{myAccounts.length > 0 ? (
					<ul>
						{myAccounts.map((account, i) => (
							<li key={i}>
								<Link
									href={`/account/${account.id}`}
									className="border-secondary-100 hover:bg-secondary-100 active:bg-secondary-100 flex items-center gap-3 border-b-1 py-2"
								>
									<img
										src={`/bank-logos/${account.id}.png`}
										alt=""
										className="h-9 w-10 rounded-sm object-contain"
									/>
									<span className="text-secondary-500 text-sm font-medium">
										{account.name} –{' '}
										{account.cardNumber.slice(account.cardNumber.length - 4)}
									</span>
									<ArrowRight className="text-secondary-300 ml-auto" />
								</Link>
							</li>
						))}
					</ul>
				) : (
					<>
						<img
							src="/graphics/no-account.png"
							alt=""
							className="mx-auto size-40"
						/>
						<span className="text-secondary-300 mx-auto text-sm">
							No linked bank accounts yet.
						</span>
					</>
				)}

				<Button href="/account/add">
					<Plus /> Add New
				</Button>
			</Card>
		</>
	);
}
