import { Button } from './button';

export type Tab = {
	id: string;
	name: string;
	content: React.ReactNode;
};

export function TabGroup({
	tabs,
	tabSearchParam,
}: {
	tabs: Tab[];
	tabSearchParam: string | null;
}) {
	const currentTab = tabs.find((t) => t.id === tabSearchParam) ?? tabs[0];

	return (
		<>
			<div className="flex items-center gap-2 text-sm font-medium">
				{tabs.map((t) => (
					<Button
						key={t.id}
						href={`?tab=${t.id}`}
						replace
						color={t.id === currentTab.id ? 'primary' : 'primary'}
						variant={t.id === currentTab.id ? 'solid' : 'ghost'}
						style="badge"
					>
						{t.name}
					</Button>
				))}
			</div>

			{currentTab.content}
		</>
	);
}
