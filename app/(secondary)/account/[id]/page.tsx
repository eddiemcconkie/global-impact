import { AccountDetails } from '@/components/account-details';
import { PageHeader } from '@/components/page-header';
import { TabGroup } from '@/components/tab-group';
import { TransactionList } from '@/components/transaction-list';
import { accounts, transactions } from '@/data/data';

export default async function AccountDetailsPage({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ tab: string | null }>;
}) {
	const { id } = await params;
	const { tab } = await searchParams;
	const account = accounts.find((a) => a.id === id)!;

	return (
		<>
			<PageHeader backlink="/account" />

			<TabGroup
				tabs={[
					{
						id: 'details',
						name: 'Details',
						content: <AccountDetails account={account} />,
					},
					{
						id: 'transaction-history',
						name: 'Transaction History',
						content: <TransactionList transactions={transactions} />,
					},
				]}
				tabSearchParam={tab}
			/>
		</>
	);
}
