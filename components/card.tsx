import clsx from 'clsx';

export function Card({
	evenPadding,
	children,
}: {
	evenPadding?: boolean;
	children: React.ReactNode;
}) {
	return (
		<div
			className={clsx(
				'border-secondary-100 flex flex-col gap-4 rounded-lg border-1 bg-white py-6',
				evenPadding ? 'px-6' : 'px-3.5',
			)}
		>
			{children}
		</div>
	);
}
