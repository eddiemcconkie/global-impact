'use server';

import { DrillDownHeader } from '@/components/drill-down-header';
import { accounts } from '@/data/data';
import { getMyAccounts, setMyAccounts } from '@/data/redis';
import { AddAccountForm } from './add-account-form';

type AddAccountActionState = { status?: 'success' | 'error' };
export async function addAccountAction(
	prevState: AddAccountActionState,
	formData: FormData,
): Promise<AddAccountActionState> {
	const accountId = formData.get('accountId');
	const account = accounts.find((a) => a.id === accountId);
	const myAccounts = await getMyAccounts();
	const exists = myAccounts.findIndex((a) => a.id === accountId) >= 0;

	if (account && !exists && account.id !== 'discover-bank') {
		myAccounts.push(account);
		await setMyAccounts(myAccounts);
		return { status: 'success' };
	}
	return { status: 'error' };
}

export default async function AddAccountPage() {
	const myAccounts = await getMyAccounts();
	const accountOptions = accounts.filter(
		(account) => myAccounts.findIndex((my) => my.id === account.id) === -1,
	);

	return (
		<>
			<DrillDownHeader backlink="/account" pageName="Add Account" />
			<AddAccountForm accountOptions={accountOptions} />
		</>
	);
}
