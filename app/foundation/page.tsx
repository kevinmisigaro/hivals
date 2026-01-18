import { Metadata } from 'next';
import Image from 'next/image';
import { Heart, Home, Users, Leaf, HandHeart, Target, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Hivals Foundation',
  description: 'The Hivals Foundation is dedicated to relieving homelessness, building resilient communities, and promoting sustainable futures through charitable work and pro-bono services.',
};

const focusAreas = [
  {
    icon: Home,
    title: 'Relieving Homelessness',
    description: 'Partnering to provide affordable housing solutions',
    fullDescription: 'We work with local authorities, housing associations, and charitable organizations to develop and deliver affordable housing solutions. Our pro-bono design and consultancy services help maximize the impact of limited resources, ensuring more people have access to safe, quality housing.',
    initiatives: [
      'Pro-bono design services for affordable housing projects',
      'Partnership with housing charities and social enterprises',
      'Technical advice for housing conversion and refurbishment',
      'Support for temporary accommodation improvements',
    ],
  },
  {
    icon: Users,
    title: 'Building Resilient Communities',
    description: 'Supporting community space projects and local initiatives',
    fullDescription: 'Strong communities need quality spaces to gather, learn, and grow. We provide expert consultancy to community groups developing or improving community centers, youth facilities, and public spaces. Our support helps communities create sustainable, accessible spaces that serve their needs.',
    initiatives: [
      'Free feasibility studies for community projects',
      'Technical support for community center developments',
      'Advice on sustainable community building design',
      'Capacity building for community organizations',
    ],
  },
  {
    icon: Leaf,
    title: 'Sustainable Futures',
    description: 'Promoting environmental sustainability through pro-bono services',
    fullDescription: 'Environmental sustainability is crucial for future generations. We offer pro-bono services to organizations working on environmental projects, helping them achieve their sustainability goals through expert advice on green building design, energy efficiency, and renewable energy integration.',
    initiatives: [
      'Pro-bono sustainability assessments',
      'Support for environmental charity building projects',
      'Energy efficiency advice for community buildings',
      'Green building certification support',
    ],
  },
];

const impactStats = [
  { value: '25+', label: 'Families Housed' },
  { value: '10+', label: 'Community Projects Supported' },
  { value: '£500K+', label: 'Pro-Bono Services Value' },
  { value: '5+', label: 'Partner Organizations' },
];

export default function FoundationPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073"
            alt="Community development"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-600 rounded-full px-4 py-2 mb-6">
              <Heart className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-sm font-semibold text-white">Making a Difference</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              The Hivals Foundation
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Using our expertise to create positive social impact through charitable work, 
              pro-bono services, and community partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The Hivals Foundation exists to leverage our professional expertise in construction and 
              development to address critical social and environmental challenges. We believe that everyone 
              deserves access to safe, sustainable housing and thriving community spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-emerald-50 rounded-xl">
                <div className="text-4xl font-bold text-emerald-700 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <Target className="h-8 w-8 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-emerald-50 text-lg leading-relaxed">
                  A society where everyone has access to safe, affordable housing and where communities 
                  have the spaces and resources they need to thrive. We envision a built environment that 
                  is sustainable, inclusive, and designed with future generations in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Focus Areas
            </h2>
            <p className="text-lg text-gray-600">
              Three key areas where we concentrate our charitable efforts and pro-bono services
            </p>
          </div>

          <div className="space-y-20">
            {focusAreas.map((area, index) => (
              <div
                key={area.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-emerald-100 text-emerald-700 mb-6">
                    <area.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-xl text-emerald-700 font-semibold mb-6">{area.description}</p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {area.fullDescription}
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Initiatives</h4>
                  <ul className="space-y-3 mb-8">
                    {area.initiatives.map((initiative, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-96 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1560518883-ce09059eeffa' :
                      index === 1 ? '1511632765486-a01980e01a18' :
                      '1473341304170-971dccb5ac1e'
                    }?q=80&w=2070`}
                    alt={area.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <HandHeart className="h-12 w-12 mb-6" aria-hidden="true" />
                <h2 className="text-3xl font-bold mb-6">Support Our Work</h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Your donation helps us provide pro-bono services to organizations working to relieve 
                  homelessness, build stronger communities, and create a more sustainable future. Every 
                  contribution makes a real difference.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-blue-50">Fund pro-bono design and consultancy services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-blue-50">Support community development projects</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                      <span className="text-sm">✓</span>
                    </div>
                    <span className="text-blue-50">Enable sustainable building initiatives</span>
                  </div>
                </div>
                <Button href="/donate" variant="secondary" size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                  Donate Now
                </Button>
                <p className="text-sm text-blue-200 mt-4">
                  Learn more about how your donation makes an impact
                </p>
              </div>
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070"
                  alt="Supporting communities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Partner With Us
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              Are you a charity, community organization, or social enterprise working on housing, 
              community development, or sustainability projects? We&apos;d love to hear from you and 
              explore how we can support your work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Contact Us About Partnership
              </Button>
              <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-700">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
