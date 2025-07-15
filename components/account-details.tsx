import { Account } from '@/data/data';
import { Trash2 } from 'lucide-react';
import { Button } from './button';

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
			<div className="self-center">
				<Button color="danger" variant="outline">
					<span className="flex items-center gap-2 px-4">
						<Trash2 /> Remove Card
					</span>
				</Button>
			</div>
		</>
	);
}
