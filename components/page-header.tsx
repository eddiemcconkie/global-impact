import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function PageHeader({
	backlink,
	pageName,
}: {
	backlink?: string;
	pageName?: string;
}) {
	return (
		<header className="grid grid-cols-[1fr_auto_1fr] items-center">
			{backlink && (
				<Link href={backlink} aria-label="Go Back" className="p-1.5">
					<ArrowLeft size={32} className="text-primary-500" />
				</Link>
			)}
			<span className="text-primary-600 col-start-2 text-lg font-medium">
				{pageName}
			</span>
		</header>
	);
}
