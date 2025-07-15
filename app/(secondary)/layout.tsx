export default function WalletLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-background flex min-h-dvh flex-col gap-6 p-6">
			{children}
		</div>
	);
}
