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
	type,
	disabled,
	replace = false,
}: {
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'danger';
	variant?: 'solid' | 'outline' | 'ghost';
	style?: 'rounded' | 'card' | 'badge';
	href?: string;
	onClick?: ComponentProps<'button'>['onClick'];
	type?: ComponentProps<'button'>['type'];
	disabled?: ComponentProps<'button'>['disabled'];
	replace?: boolean;
}) {
	const className = clsx(
		// Color
		color === 'primary' &&
			'[--color:var(--color-primary-400)] hover:not-disabled:[--color:var(--color-primary-500)] active:not-disabled:[--color:var(--color-primary-500)] disabled:opacity-50',
		color === 'secondary' &&
			'[--color:var(--color-secondary-300)] hover:not-disabled:[--color:var(--color-secondary-500)] active:not-disabled:[--color:var(--color-secondary-500)] disabled:opacity-50',
		color === 'danger' &&
			'[--color:var(--color-danger-400)] hover:not-disabled:[--color:var(--color-danger-500)] active:not-disabled:[--color:var(--color-danger-500)] disabled:opacity-50',

		// Variant
		variant === 'solid' && 'border-transparent bg-(--color) text-white',
		variant === 'outline' && 'border-(--color)',
		variant === 'ghost' && 'border-transparent',
		variant !== 'solid' &&
			'text-(--color) bg-transparent hover:bg-secondary-100 active:bg-secondary-100',

		// Style
		style === 'rounded' && 'rounded-full py-2 px-3 text-sm',
		style === 'card' && 'rounded-lg px-3.5 py-6 text-lg',
		style === 'badge' && 'rounded-full py-1 px-4',

		// base
		'flex items-center justify-center border-[1.5px] gap-2 font-medium cursor-pointer transition-all',
	);

	return href ? (
		<Link href={href} replace={replace} className={className}>
			{children}
		</Link>
	) : (
		<button
			onClick={onClick}
			type={type}
			disabled={disabled}
			className={className}
		>
			{children}
		</button>
	);
}
