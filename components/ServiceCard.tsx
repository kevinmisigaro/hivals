import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  id?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href, id }: ServiceCardProps) {
  const content = (
    <div className="group relative h-full bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100 text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors duration-300">
            <Icon className="h-7 w-7" aria-hidden="true" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} id={id} className="block h-full">
        {content}
      </Link>
    );
  }

  return <div id={id}>{content}</div>;
}
