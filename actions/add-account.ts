'use server';

import { accounts } from '@/data/data';
import { getMyAccounts, setMyAccounts } from '@/data/redis';

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
