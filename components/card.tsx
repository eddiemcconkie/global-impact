export function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="border-secondary-100 flex flex-col gap-4 rounded-lg border-1 bg-white px-3.5 py-6">
			{children}
		</div>
	);
}
