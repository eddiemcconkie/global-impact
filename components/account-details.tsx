import { Account } from '@/data/data';
import { getMyAccounts, setMyAccounts } from '@/data/redis';
import { Trash2 } from 'lucide-react';
import { redirect } from 'next/navigation';
import { Button } from './button';

async function removeAccount(formData: FormData) {
	'use server';
	const accountId = formData.get('accountId');
	const myAccounts = await getMyAccounts();
	await setMyAccounts(myAccounts.filter((a) => a.id !== accountId));
	redirect('/account');
}

export function AccountDetails({ account }: { account: Account }) {
	return (
		<>
			<div
				style={{ '--bank-color': account.brandColor } as React.CSSProperties}
				className="flex aspect-[1.586] flex-col gap-7 rounded-lg bg-(--bank-color) px-4 py-6 text-white"
			>
				<img
					src={`/bank-logos/${account.id}.png`}
					alt=""
					className="h-10 w-9 object-contain"
				/>
				<span className="mt-auto font-mono text-lg">{account.cardNumber}</span>
				<div className="flex items-end justify-between">
					<div>
						<div className="text-xs">EXP</div>
						<div className="font-mono text-sm">{account.cardExpiration}</div>
					</div>
					<img src="/visa.svg" alt="" />
				</div>
			</div>
			<form action={removeAccount} className="self-center">
				<input type="hidden" name="accountId" value={account.id} />
				<Button color="danger" variant="outline" type="submit">
					<span className="flex items-center gap-2 px-4">
						<Trash2 /> Remove Card
					</span>
				</Button>
			</form>
		</>
	);
}
