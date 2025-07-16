import { PageHeader } from '@/components/page-header';
import { accounts } from '@/data/data';
import { getMyAccounts } from '@/data/redis';
import { AddAccountForm } from './add-account-form';

export default async function AddAccountPage() {
	const myAccounts = await getMyAccounts();
	const accountOptions = accounts.filter(
		(account) => myAccounts.findIndex((my) => my.id === account.id) === -1,
	);

	return (
		<>
			<PageHeader backlink="/account" pageName="Add Account" />
			<AddAccountForm accountOptions={accountOptions} />
		</>
	);
}
