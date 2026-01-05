import { Metadata } from 'next';
import Image from 'next/image';
import { Target, Award, Users, CheckCircle, Lightbulb, Shield, Heart } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us | The Hivals Group Limited',
  description: 'Learn about The Hivals Group Limited - a multi-disciplinary consultancy combining technical expertise with practical experience to deliver innovative, sustainable solutions.',
};

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, delivering quality results that exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new technologies and methodologies to provide cutting-edge solutions for our clients.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with transparency, honesty, and ethical practices in all our professional relationships.',
  },
  {
    icon: Heart,
    title: 'Social Responsibility',
    description: 'We believe in using our expertise to create positive social and environmental impact.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with clients and partners to achieve shared goals and successful outcomes.',
  },
  {
    icon: Target,
    title: 'Client Focus',
    description: 'Our clients\' success is our success. We tailor our services to meet their unique needs and objectives.',
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'Managing Director',
    bio: 'Over 15 years of experience in construction management and sustainable building design.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070',
  },
  {
    name: 'Sarah Johnson',
    role: 'Head of Project Management',
    bio: 'Chartered project manager specializing in complex commercial and residential developments.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070',
  },
  {
    name: 'Michael Chen',
    role: 'Lead Building Surveyor',
    bio: 'RICS chartered surveyor with expertise in building pathology and conservation.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070',
  },
  {
    name: 'Emily Williams',
    role: 'Sustainability Consultant',
    bio: 'Passionate about green building design and renewable energy integration.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070',
  },
];

const qualifications = [
  'RICS Chartered Building Surveyors',
  'CIOB Chartered Builders',
  'APM Project Management Professionals',
  'BREEAM Assessors',
  'CDM Principal Designer Accreditation',
  'ISO 9001 Quality Management',
];

const whyChooseUs = [
  {
    title: 'Proven Track Record',
    description: 'Successfully delivered 100+ projects across residential, commercial, and community sectors.',
  },
  {
    title: 'Multi-Disciplinary Expertise',
    description: 'Comprehensive in-house capabilities covering all aspects of construction consultancy.',
  },
  {
    title: 'Client-Centric Approach',
    description: 'We listen, understand, and tailor our services to meet your specific requirements.',
  },
  {
    title: 'Sustainable Focus',
    description: 'Committed to delivering environmentally responsible and energy-efficient solutions.',
  },
  {
    title: 'Competitive Pricing',
    description: 'Professional services at fair rates, with transparent pricing and no hidden costs.',
  },
  {
    title: 'Social Impact',
    description: 'Through the Hivals Foundation, we give back to communities and support charitable causes.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              About The Hivals Group
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A multi-disciplinary consultancy dedicated to delivering excellence in construction, 
              project management, and sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  The Hivals Group Limited was founded with a clear vision: to provide expert consultancy 
                  services that combine technical excellence with practical experience. Our team brings 
                  together professionals from diverse backgrounds in construction, engineering, surveying, 
                  and project management.
                </p>
                <p>
                  What sets us apart is our commitment to not just delivering projects, but creating 
                  lasting value for our clients and the communities they serve. We believe that every 
                  project, whether large or small, deserves the same level of expertise, attention to 
                  detail, and dedication to quality.
                </p>
                <p>
                  Through our work and the Hivals Foundation, we&apos;re building a legacy of sustainable, 
                  socially responsible development that benefits everyone.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Target className="h-8 w-8 text-blue-800" aria-hidden="true" />
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver innovative, sustainable, and compliant construction consultancy services 
                  that exceed client expectations while contributing positively to society and the environment.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Award className="h-8 w-8 text-blue-800" aria-hidden="true" />
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the trusted consultancy partner of choice for organizations seeking expert guidance 
                  in construction, development, and sustainable building practices.
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-blue-100 text-blue-800 mb-6">
                  <value.icon className="w-7 h-7" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-800 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Expertise & Qualifications</h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Our team holds professional qualifications and accreditations from leading industry bodies, 
                ensuring you receive expert advice backed by recognized standards of excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-blue-50">{qual}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070"
                alt="Professional team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              What makes The Hivals Group the right partner for your project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how our expertise can help bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              Get in Touch
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-800">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
