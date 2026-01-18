import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'Stay updated with the latest news from The Hivals Foundation - projects, community initiatives, and industry updates.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
