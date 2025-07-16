import { Nav } from '@/components/nav';

export default async function AppLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Nav />
			<main className="bg-background flex min-h-dvh flex-col gap-6 p-6 pt-8 pb-20">
				{children}
			</main>
		</>
	);
}
