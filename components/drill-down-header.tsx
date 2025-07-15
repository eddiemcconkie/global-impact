import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function DrillDownHeader({
	backlink,
	pageName,
}: {
	backlink: string;
	pageName?: string;
}) {
	return (
		<header className="grid grid-cols-[1fr_auto_1fr] items-center">
			<Link href={backlink} aria-label="Go Back" className="p-1.5">
				<ArrowLeft size={32} className="text-primary-500" />
			</Link>
			<span className="text-primary-600 font-medium">{pageName}</span>
		</header>
	);
}
