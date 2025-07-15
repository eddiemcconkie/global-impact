import { Button } from '@/components/button';
import { Card } from '@/components/card';
import transactions from '@/data/transactions.json' with { type: 'json' };
import clsx from 'clsx';
import {
	ArrowDownLeft,
	ArrowRight,
	ArrowUpRight,
	Bell,
	Wallet,
} from 'lucide-react';
import { BalanceCard } from './balance-card';

export default function WalletPage() {
	return (
		<>
			<header className="text-primary-700 flex justify-between">
				<span className="text-2xl font-bold">Good morning, Matt!</span>
				<button
					aria-label="Notifications"
					className="after:bg-danger-400 relative after:absolute after:top-0.5 after:right-0.5 after:size-2 after:rounded-full after:content-['']"
				>
					<Bell />
				</button>
			</header>

			<BalanceCard />

			<Button style="card" href="/bank">
				<div className="flex w-full items-center justify-start gap-2">
					<Wallet /> My Wallet
					<ArrowRight className="ml-auto" />
				</div>
			</Button>

			<Card>
				<p className="text-secondary-300 text-sm font-medium">
					Recent Transactions
				</p>
				<ul>
					{transactions.map((transaction, i, array) => (
						<li
							key={i}
							className={clsx(
								'border-secondary-100 flex items-center gap-3 py-2',
								i !== array.length - 1 && 'border-b-1',
							)}
						>
							<div
								className={clsx(
									'rounded-full p-1.5',
									transaction.amount > 0
										? 'bg-primary-200 text-primary-400'
										: 'bg-danger-100 text-danger-400',
								)}
							>
								{transaction.amount > 0 ? <ArrowDownLeft /> : <ArrowUpRight />}
							</div>

							<div>
								<div className="text-secondary-400 text-sm font-medium">
									{transaction.name}
								</div>
								<div className="text-secondary-300 text-xs">
									{formatTimestamp(transaction.timestamp)}
								</div>
							</div>

							<div className="text-primary-700 ml-auto text-xs">
								{formatCurrency(Math.abs(transaction.amount))}
							</div>
						</li>
					))}
				</ul>
			</Card>
		</>
	);
}

const currencyFormatter = Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
function formatCurrency(amount: number) {
	return currencyFormatter.format(amount);
}

const timeFormatter = new Intl.DateTimeFormat('en-US', {
	hour: 'numeric',
	minute: '2-digit',
	hour12: true,
	month: 'short',
	day: 'numeric',
});
function formatTimestamp(timestamp: string) {
	const date = new Date(timestamp);

	const { month, day, hour, minute, dayPeriod } = Object.fromEntries(
		timeFormatter.formatToParts(date).map((part) => [part.type, part.value]),
	) as Record<'month' | 'day' | 'hour' | 'minute' | 'dayPeriod', string>;

	return `${hour}:${minute}${dayPeriod.toLowerCase()} | ${month} ${day}${getOrdinal(Number(day))}`;
}

function getOrdinal(number: number) {
	if (number % 100 >= 11 && number % 100 <= 13) return 'th';

	switch (number % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}
