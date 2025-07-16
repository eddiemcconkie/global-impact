'use client';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Account } from '@/data/data';
import { Home, Plus } from 'lucide-react';
import { useActionState } from 'react';
import { addAccountAction } from './page';

export function AddAccountForm({
	accountOptions,
}: {
	accountOptions: Account[];
}) {
	const [state, formAction, isPending] = useActionState(addAccountAction, {});

	return state.status === 'success' ? (
		<Card evenPadding>
			<div className="flex flex-col items-center gap-2">
				<img
					src="/graphics/add-account-success.png"
					alt=""
					className="size-40"
				/>
				<p className="text-primary-600 text-2xl font-bold">Success</p>
				<p className="text-secondary-500 text-center text-lg">
					You have added a bank account. It may take a few minutes to complete
					the process. Once the process is complete you will see you linked bank
					account within you wallet in this app. You can access your wallet by
					clicking “My Wallet” on the home page.
				</p>
			</div>
			<Button href="/wallet">
				<Home /> Back to Home
			</Button>
		</Card>
	) : state.status === 'error' ? (
		<Card evenPadding>
			<div className="text-secondary-500 flex flex-col items-center gap-2 text-center text-lg">
				<img
					src="/graphics/add-account-failed.png"
					alt=""
					className="size-40"
				/>
				<p className="text-primary-600 text-2xl font-bold">
					Unsuccessful attempt
				</p>
				<p>
					We were unfortunately unable to successfully validate your identity at
					this time.
				</p>
				<p>
					We are working on a solution and as soon as we have the ability to
					manually verify your identity we will email you to let you know to try
					again.
				</p>
				<p>
					Please contact{' '}
					<a
						href="mailto:help@globalimpact.com"
						className="text-primary-400 font-bold"
					>
						help@globalimpact.com
					</a>{' '}
					for further assistance.
				</p>
			</div>
		</Card>
	) : (
		<form action={formAction} className="contents">
			<Card>
				<label className="flex flex-col gap-2.5">
					<span className="text-primary-600 text-sm font-bold">
						Select Bank
					</span>
					<select
						name="accountId"
						className="border-secondary-100 rounded-lg border-1 p-2"
					>
						{accountOptions.map((opt) => (
							<option key={opt.id} value={opt.id}>
								{opt.name}
							</option>
						))}
					</select>
				</label>
			</Card>
			<Button type="submit" disabled={isPending}>
				<Plus /> Add
			</Button>
		</form>
	);
}
