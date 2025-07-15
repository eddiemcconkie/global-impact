'use client';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import clsx from 'clsx';
import {
	ArrowDownLeft,
	ArrowRight,
	ArrowUpRight,
	Eye,
	EyeClosed,
} from 'lucide-react';
import { useState } from 'react';

export function BalanceCard() {
	const [showBalance, setShowBalance] = useState(true);

	return (
		<Card>
			<div>
				<p className="text-secondary-300 mb-1 text-lg font-medium">
					Total Balance
				</p>
				<div className="flex items-center justify-between">
					<p
						className={clsx(
							'text-primary-400 text-3xl font-bold transition-all',
							!showBalance && 'blur-sm',
						)}
					>
						$34,304.00
					</p>
					<button
						onClick={() => setShowBalance((s) => !s)}
						className="text-secondary-300"
						aria-label={showBalance ? 'Hide balance' : 'Show balance'}
					>
						{showBalance ? <Eye /> : <EyeClosed />}
					</button>
				</div>
			</div>
			<hr />
			<div>
				<p className="text-secondary-300 mb-1 text-sm font-medium">Rewards</p>
				<div className="flex items-center justify-between">
					<p className="text-primary-400 text-2xl font-bold">1,596</p>
					<ArrowRight className="text-secondary-300" />
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<Button>
					<ArrowDownLeft /> Add Balance
				</Button>
				<Button>
					<ArrowUpRight /> Pay
				</Button>
			</div>
		</Card>
	);
}
