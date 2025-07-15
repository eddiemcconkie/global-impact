import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { DrillDownHeader } from '@/components/drill-down-header';
import { accounts, myAccounts } from '@/data/data';
import { Plus } from 'lucide-react';
import { redirect } from 'next/navigation';

async function addAccountAction(formData: FormData) {
	'use server';
	const accountId = formData.get('accountId');
	const account = accounts.find((a) => a.id === accountId);
	const exists = myAccounts.findIndex((a) => a.id === accountId) >= 0;

	if (account && !exists) {
		myAccounts.push(account);
		console.log('Adding account');
		console.log(myAccounts);
		redirect('/account');
	}
}

export default function AddAccountPage() {
	const accountOptions = accounts.filter(
		(account) => myAccounts.findIndex((my) => my.id === account.id) === -1,
	);

	return (
		<>
			<DrillDownHeader backlink="/account" pageName="Add Account" />
			{/* <AddAccount /> */}
			<form action={addAccountAction} className="contents">
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
				<Button type="submit">
					<Plus /> Add
				</Button>
			</form>
		</>
	);
}
