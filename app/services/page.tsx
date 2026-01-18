import { Metadata } from 'next';
import Image from 'next/image';
import { Building2, Briefcase, Shield, LineChart, Leaf, CheckCircle, TrendingUp, GraduationCap } from 'lucide-react';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive consultancy services including Design & Construction, Project Management, Risk Assessment, Building Surveying, Sustainable Technologies, Contract Management, Business Support, and Asset and Portfolio Management.',
};

const services = [
  {
    id: 'design-construction',
    icon: Building2,
    title: 'Design & Construction',
    description: 'Sustainable, compliant with Domestic and Non-Domestic Schemes',
    fullDescription: 'Our Design & Construction services deliver innovative, sustainable solutions that comply with all relevant building regulations and schemes. We specialize in both domestic and non-domestic projects, ensuring every design meets the highest standards of quality, safety, and environmental responsibility.',
    benefits: [
      'Compliance with Building Regulations and Planning Requirements',
      'Sustainable design principles integrated throughout',
      'Energy-efficient solutions for reduced operational costs',
      'Expert coordination with architects, engineers, and contractors',
      'Quality assurance at every stage of construction',
    ],
  },
  {
    id: 'project-management',
    icon: Briefcase,
    title: 'Project Management',
    description: 'Budgeting, scheduling, and coordination for on-time, on-budget delivery',
    fullDescription: 'Our experienced project managers ensure your construction projects are delivered on time, within budget, and to the highest quality standards. We provide comprehensive oversight from initial planning through to final completion and handover.',
    benefits: [
      'Detailed project planning and scheduling',
      'Budget management and cost control',
      'Risk identification and mitigation strategies',
      'Coordination of all project stakeholders',
      'Regular progress reporting and communication',
    ],
  },
  {
    id: 'risk-assessment',
    icon: Shield,
    title: 'Risk Assessment & Compliance',
    description: 'Health & safety risk assessments, building regulations, and CDM compliance',
    fullDescription: 'We provide comprehensive risk assessment services to ensure your projects comply with all health and safety regulations, building codes, and CDM (Construction Design and Management) requirements. Our proactive approach identifies and mitigates risks before they become issues.',
    benefits: [
      'Comprehensive health and safety risk assessments',
      'CDM compliance and Principal Designer services',
      'Building regulations compliance checks',
      'Fire safety assessments and strategies',
      'Regular site inspections and audits',
    ],
  },
  {
    id: 'building-surveying',
    icon: LineChart,
    title: 'Building Surveying & Consultancy',
    description: 'Condition reports, feasibility studies, and project advice',
    fullDescription: 'Our chartered building surveyors provide expert advice on all aspects of building condition, maintenance, and development. From detailed condition surveys to feasibility studies for new developments, we deliver comprehensive insights to inform your decision-making.',
    benefits: [
      'Detailed building condition surveys',
      'Feasibility studies for development projects',
      'Dilapidations assessments',
      'Party wall matters and dispute resolution',
      'Technical due diligence for property transactions',
    ],
  },
  {
    id: 'sustainable-technologies',
    icon: Leaf,
    title: 'Sustainable Technologies',
    description: 'Energy efficiency, green building design, and renewable energy integration',
    fullDescription: 'We help clients achieve their sustainability goals through innovative green building design, energy-efficient solutions, and renewable energy integration. Our expertise ensures your projects meet current and future environmental standards while reducing operational costs.',
    benefits: [
      'Energy performance assessments and improvements',
      'Renewable energy system design and integration',
      'BREEAM and other green building certifications',
      'Carbon reduction strategies',
      'Sustainable material selection and specification',
    ],
  },
  // {
  //   id: 'contract-management',
  //   icon: FileText,
  //   title: 'Contract Management',
  //   description: 'Procurement, contract admin, and stakeholder liaison',
  //   fullDescription: 'Our contract management services ensure smooth project delivery through expert procurement advice, contract administration, and effective stakeholder management. We protect your interests while maintaining positive relationships with all parties.',
  //   benefits: [
  //     'Procurement strategy and tender management',
  //     'Contract drafting and negotiation',
  //     'Payment certification and valuations',
  //     'Variation and change management',
  //     'Dispute avoidance and resolution',
  //   ],
  // },
  // {
  //   id: 'business-support',
  //   icon: Users,
  //   title: 'Business Support',
  //   description: 'Business planning, market analysis, and strategic advice for construction professionals',
  //   fullDescription: 'We provide strategic business support services tailored to construction professionals and companies. From business planning and market analysis to growth strategies and operational improvements, we help you build a successful and sustainable business.',
  //   benefits: [
  //     'Business planning and strategy development',
  //     'Market analysis and opportunity identification',
  //     'Financial planning and forecasting',
  //     'Operational efficiency improvements',
  //     'Growth and expansion strategies',
  //   ],
  // },
  {
    id: 'asset-portfolio-management',
    icon: TrendingUp,
    title: 'Asset and Portfolio Management',
    description: 'Strategic management of property assets and investment portfolios',
    fullDescription: 'Our Asset and Portfolio Management services help clients maximize the value and performance of their property assets. We provide strategic oversight, performance monitoring, and investment optimization to ensure your real estate portfolio delivers optimal returns while meeting your long-term objectives.',
    benefits: [
      'Property portfolio analysis and optimization',
      'Asset performance monitoring and reporting',
      'Strategic investment planning and advice',
      'Lifecycle cost analysis and budgeting',
      'Maintenance and capital expenditure planning',
    ],
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Training',
    description: 'Expert-led courses and workshops to boost professional skills',
    fullDescription: 'Training tailored to boost skills in project and contract management, business analysis, procurement, health and safety, and leadership with our expert-led courses and workshops. Our training programmes are designed to equip professionals with practical knowledge and industry-recognised competencies that drive career growth and organisational success.',
    benefits: [
      'Project and contract management training',
      'Business analysis and procurement skills development',
      'Health and safety certification courses',
      'Leadership and management workshops',
      'Customised in-house training programmes',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive consultancy services tailored to meet the unique needs of your construction 
              and development projects. Expert guidance from planning through to completion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={`#${service.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-100 text-blue-800 mb-6">
                      <service.icon className="w-8 h-8" aria-hidden="true" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.fullDescription}
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button href="/contact" variant="primary">
                      Discuss This Service
                    </Button>
                  </div>
                  <div className={`relative h-96 rounded-xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Image
                      src={`https://images.unsplash.com/photo-${
                        index === 0 ? '1503387762-592deb58ef4e' :
                        index === 1 ? '1454165804606-c3d57bc86b40' :
                        index === 2 ? '1589939705384-5185137a336d' :
                        index === 3 ? '1560518883-ce09059eeffa' :
                        index === 4 ? '1473341304170-971dccb5ac1e' :
                        index === 5 ? '1450101499163-c8848c66ca85' :
                        index === 6 ? '1524178232363-1fb2b075b655' :
                        '1521791136064-7986c2920216'
                      }?q=80&w=2070`}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Need Expert Consultancy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help deliver your project successfully.
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
