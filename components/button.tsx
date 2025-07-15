import clsx from 'clsx';
import Link from 'next/link';
import { ComponentProps } from 'react';

export function Button({
	children,
	color = 'primary',
	variant = 'solid',
	style = 'rounded',
	href,
	onClick,
}: {
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'danger';
	variant?: 'solid' | 'outline' | 'ghost';
	style?: 'rounded' | 'card';
	href?: string;
	onClick?: ComponentProps<'button'>['onClick'];
}) {
	const className = clsx(
		// Color
		color === 'primary' &&
			'[--color:var(--color-primary-400)] hover:[--color:var(--color-primary-500)] active:[--color:var(--color-primary-500)]',
		color === 'secondary' &&
			'[--color:var(--color-secondary-300)] hover:[--color:var(--color-secondary-400)] active:[--color:var(--color-secondary-400)]',
		color === 'danger' &&
			'[--color:var(--color-danger-400)] hover:[--color:var(--color-danger-500)] active:[--color:var(--color-danger-500)]',

		// Variant
		variant === 'solid' && 'border-transparent bg-(--color)  text-white',
		variant === 'outline' && 'border-(--color) text-(--color) bg-transparent ',

		// Style
		style === 'rounded' && 'rounded-full py-2 px-3 text-sm',
		style === 'card' && 'rounded-lg px-3.5 py-6 text-lg',

		// Shared
		'flex items-center justify-center border-1 gap-2 font-medium transition-all',
	);

	return href ? (
		<Link href={href} className={className}>
			{children}
		</Link>
	) : (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
}
