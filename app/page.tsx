import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Building2, Briefcase, Shield, LineChart, Leaf, FileText, ArrowRight, Heart } from "lucide-react";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Expert Consultancy Services",
  description: "Multi-disciplinary consultancy offering expert services in Design & Construction, project management, risk assessment, and sustainable solutions.",
};

const services = [
  {
    icon: Building2,
    title: "Design & Construction",
    description: "Sustainable, compliant solutions for Domestic and Non-Domestic Schemes.",
    href: "/services#design-construction",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Expert budgeting, scheduling, and coordination for on-time, on-budget delivery.",
    href: "/services#project-management",
  },
  {
    icon: Shield,
    title: "Risk Assessment & Compliance",
    description: "Comprehensive health & safety risk assessments and CDM compliance.",
    href: "/services#risk-assessment",
  },
  {
    icon: LineChart,
    title: "Building Surveying",
    description: "Professional condition reports, feasibility studies, and project advice.",
    href: "/services#building-surveying",
  },
  {
    icon: Leaf,
    title: "Sustainable Technologies",
    description: "Energy efficiency, green building design, and renewable energy integration.",
    href: "/services#sustainable-technologies",
  },
  {
    icon: FileText,
    title: "Contract Management",
    description: "Expert procurement, contract administration, and stakeholder liaison.",
    href: "/services#contract-management",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Modern construction"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Building Tomorrow&apos;s Solutions Today
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Expert consultancy services in Design & Construction, project management, and sustainable solutions. 
              Combining technical expertise with practical experience to deliver innovative results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="primary" size="lg">
                Our Services
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-blue-800">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              About The Hivals Group Limited
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are a multi-disciplinary consultancy offering expert services across the construction and 
              development sectors. Our team combines technical expertise with practical experience to deliver 
              innovative, sustainable, and compliant solutions for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-800 mb-2">15+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-800 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-800 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive consultancy services tailored to your project needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/services" variant="primary" size="lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-700 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Heart className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-semibold">Making a Difference</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                The Hivals Foundation
              </h2>
              <p className="text-lg text-emerald-50 mb-6 leading-relaxed">
                Our charitable arm dedicated to relieving homelessness, building resilient communities, 
                and promoting sustainable futures. We believe in using our expertise to create positive 
                social impact.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-emerald-50">Partnering to provide affordable housing solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-emerald-50">Supporting community space projects and local initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-1">
                    <span className="text-sm">✓</span>
                  </div>
                  <span className="text-emerald-50">Promoting environmental sustainability through pro-bono services</span>
                </li>
              </ul>
              <Button href="/foundation" variant="secondary" size="lg" className="bg-white text-emerald-700 hover:bg-gray-100">
                Learn More About Our Foundation
              </Button>
            </div>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073"
                alt="Community development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Latest News & Updates
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed about our latest projects and initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Sustainable Housing Project Launched",
                excerpt: "We're excited to announce our latest project focusing on affordable, sustainable housing solutions.",
                date: "2024-01-15",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
              },
              {
                title: "Community Centre Renovation Complete",
                excerpt: "Successfully completed renovation of local community centre, providing enhanced facilities for residents.",
                date: "2024-01-10",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031",
              },
              {
                title: "Green Building Certification Achieved",
                excerpt: "Our latest commercial project has achieved BREEAM Excellent certification for sustainability.",
                date: "2024-01-05",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
              },
            ].map((article, index) => (
              <article key={index} className="group">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <time className="text-sm text-gray-500">{new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3 group-hover:text-blue-800 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href="/news" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:gap-3 transition-all">
                  Read more
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/news" variant="outline" size="lg">
              View All News
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get in touch with our team to discuss how we can help bring your vision to life with 
            expert consultancy and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
              Contact Us Today
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-800">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
