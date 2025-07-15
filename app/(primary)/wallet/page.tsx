import { Button } from '@/components/button';
import { TransactionList } from '@/components/transaction-list';
import { transactions } from '@/data/data';
import { ArrowRight, Bell, Wallet } from 'lucide-react';
import { BalanceCard } from './balance-card';

export default function WalletPage() {
	return (
		<>
			<header className="text-primary-700 flex justify-between">
				<span className="text-2xl font-bold">Good morning, Aaron!</span>
				<button
					aria-label="Notifications"
					className="after:bg-danger-400 relative after:absolute after:top-0.5 after:right-0.5 after:size-2 after:rounded-full after:content-['']"
				>
					<Bell />
				</button>
			</header>

			<BalanceCard />

			<Button style="card" href="/account">
				<Wallet /> My Wallet
				<ArrowRight className="ml-auto" />
			</Button>

			<TransactionList transactions={transactions} />
		</>
	);
}
