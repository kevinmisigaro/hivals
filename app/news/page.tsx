'use client';

import { useState } from 'react';
import NewsCard from '@/components/NewsCard';

const categories = ['All', 'Projects', 'Foundation', 'Industry News'];

const newsArticles = [
  {
    title: 'New Sustainable Housing Project Launched',
    excerpt: 'We\'re excited to announce our latest project focusing on affordable, sustainable housing solutions in partnership with local housing associations.',
    date: '2024-01-15',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073',
    slug: 'sustainable-housing-project-launched',
  },
  {
    title: 'Community Centre Renovation Complete',
    excerpt: 'Successfully completed renovation of local community centre, providing enhanced facilities for residents and community groups.',
    date: '2024-01-10',
    category: 'Foundation',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031',
    slug: 'community-centre-renovation-complete',
  },
  {
    title: 'Green Building Certification Achieved',
    excerpt: 'Our latest commercial project has achieved BREEAM Excellent certification for sustainability, setting new standards in green building design.',
    date: '2024-01-05',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
    slug: 'green-building-certification-achieved',
  },
  {
    title: 'Partnership with Local Housing Charity',
    excerpt: 'The Hivals Foundation announces new partnership to provide pro-bono design services for affordable housing initiatives.',
    date: '2023-12-20',
    category: 'Foundation',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096',
    slug: 'partnership-housing-charity',
  },
  {
    title: 'New Building Regulations 2024 Update',
    excerpt: 'Important updates to building regulations coming into effect in 2024. Learn how these changes may affect your project.',
    date: '2023-12-15',
    category: 'Industry News',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070',
    slug: 'building-regulations-2024-update',
  },
  {
    title: 'Residential Development Milestone Reached',
    excerpt: 'Celebrating the successful completion of 50 residential units, delivered on time and within budget.',
    date: '2023-12-01',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
    slug: 'residential-development-milestone',
  },
  {
    title: 'Youth Centre Project Wins Award',
    excerpt: 'Our pro-bono work on a local youth centre has been recognized with a community impact award.',
    date: '2023-11-25',
    category: 'Foundation',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070',
    slug: 'youth-centre-award',
  },
  {
    title: 'Sustainable Construction Trends 2024',
    excerpt: 'Exploring the latest trends in sustainable construction and how they\'re shaping the future of the built environment.',
    date: '2023-11-20',
    category: 'Industry News',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070',
    slug: 'sustainable-construction-trends-2024',
  },
  {
    title: 'Commercial Office Refurbishment Complete',
    excerpt: 'Modern, energy-efficient office space delivered for growing tech company, featuring sustainable design elements.',
    date: '2023-11-10',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    slug: 'commercial-office-refurbishment',
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = selectedCategory === 'All'
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Stay informed about our latest projects, foundation work, and industry insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <>
              <div className="mb-16">
                <NewsCard {...filteredArticles[0]} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.slice(1).map((article) => (
                  <NewsCard key={article.slug} {...article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
