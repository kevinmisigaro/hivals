import { Metadata } from 'next';
import Image from 'next/image';
import { Heart, HandHeart, CheckCircle, CreditCard, Building, Mail } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support The Hivals Foundation in relieving homelessness, building resilient communities, and promoting sustainable futures. Your donation makes a real difference.',
};

const donationImpact = [
  {
    amount: '£50',
    impact: 'Provides initial design consultation for a community project',
    icon: HandHeart,
  },
  {
    amount: '£250',
    impact: 'Funds a complete feasibility study for affordable housing',
    icon: Building,
  },
  {
    amount: '£500',
    impact: 'Supports full architectural design for a community space',
    icon: Heart,
  },
  {
    amount: '£1,000+',
    impact: 'Enables comprehensive project support from design to completion',
    icon: CheckCircle,
  },
];

const donationMethods = [
  {
    title: 'Bank Transfer',
    description: 'Direct bank transfer for one-time or recurring donations',
    details: [
      'Account Name: The Hivals Group Limited',
      'Account Number: 25674711',
      'Sort Code: 04-06-05',
      'IBAN: GB58 CLRB 0406 0525 6747 11',
      'SWIFT Code: CLRBGB22',
      'Reference: DONATION-[Your Name]',
    ],
  },
  {
    title: 'Cheque',
    description: 'Send a cheque made payable to The Hivals Group Limited',
    details: [
      'Payable to: The Hivals Group Limited',
      'Mail to: info@thehivalsgroup.co.uk',
      'Include your name and email for acknowledgment',
    ],
  },
];

const impactAreas = [
  {
    title: 'Affordable Housing',
    description: 'Pro-bono design and technical services for housing projects that help families escape homelessness',
  },
  {
    title: 'Community Spaces',
    description: 'Support for community centers, youth facilities, and public spaces that strengthen neighborhoods',
  },
  {
    title: 'Sustainable Buildings',
    description: 'Green building expertise for environmental charities and sustainable development projects',
  },
  {
    title: 'Clean Water Scheme',
    description: 'Providing access to safe, clean drinking water through sustainable water infrastructure and purification systems',
  },
  {
    title: 'Rural Electrification Scheme',
    description: 'Bringing reliable electricity to rural communities through renewable energy solutions and grid expansion',
  },
];

export default function DonatePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070"
            alt="Supporting communities"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-600 rounded-full px-4 py-2 mb-6">
              <Heart className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="text-sm font-semibold text-white">Make an Impact</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Your donation helps us provide professional services to organizations working to relieve
              homelessness, build stronger communities, and create a more sustainable future.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Where Your Donation Goes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              100% of your donation goes directly to funding pro-bono professional services for charitable
              organizations and community projects. We cover our operational costs through our commercial
              consultancy work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-emerald-50 rounded-xl p-8 border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600">
              See how different donation amounts translate into real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationImpact.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 mb-6">
                  <item.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <div className="text-3xl font-bold text-emerald-700 mb-4">{item.amount}</div>
                <p className="text-gray-700 leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <CreditCard className="h-12 w-12 text-emerald-700 mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              How to Donate
            </h2>
            <p className="text-lg text-gray-600">
              Choose the donation method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {donationMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <ul className="space-y-3">
                    {method.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-800 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <Mail className="h-12 w-12 mx-auto mb-6" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-4">Have Questions About Donating?</h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team is happy to discuss donation options, corporate giving opportunities, or how your
              contribution will be used. Get in touch with us today.
            </p>
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Thank You for Your Support
            </h2>
            <p className="text-xl text-emerald-50 mb-10 leading-relaxed">
              Every donation, no matter the size, helps us provide professional services to organizations
              working to make our communities stronger, safer, and more sustainable. Together, we&apos;re
              building a better future.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-emerald-100">Families Housed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-emerald-100">Community Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">£500K+</div>
                <div className="text-emerald-100">In Pro-Bono Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
