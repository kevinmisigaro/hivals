import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Instagram } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | The Hivals Group Limited',
  description: 'Get in touch with The Hivals Group Limited. Contact us for expert consultancy services in construction, project management, and sustainable solutions.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@thehivalsgroup.co.uk',
    link: 'mailto:info@thehivalsgroup.co.uk',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+44 7899 623150',
    link: 'tel:+447899623150',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'United Kingdom',
    link: null,
  },
  {
    icon: Clock,
    title: 'Response Time',
    content: 'Within 24-48 hours',
    link: null,
  },
];

const socialLinks = [
  // {
  //   name: 'LinkedIn',
  //   icon: Linkedin,
  //   href: '#',
  //   color: 'hover:text-blue-600',
  // },
  // {
  //   name: 'Twitter',
  //   icon: Twitter,
  //   href: '#',
  //   color: 'hover:text-blue-400',
  // },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/thehivalsfoundation',
    color: 'hover:text-pink-600',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Ready to start your project? Have a question? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-blue-800 transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h2>
                <p className="text-gray-600 mb-6">
                  Stay connected and follow our latest updates on social media.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center transition-all ${social.color} hover:bg-gray-200`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 rounded-2xl shadow-lg p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Interested in Our Foundation?</h2>
                <p className="text-emerald-50 mb-6">
                  Learn more about The Hivals Foundation and how we&apos;re making a positive impact 
                  in communities.
                </p>
                <a
                  href="/foundation"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Visit Foundation Page
                </a>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Looking for Career Opportunities?
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;re always interested in hearing from talented professionals who share our 
                  values and passion for excellence. Send your CV and cover letter to our email address.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <a
                  href="mailto:info@thehivalsgroup.co.uk?subject=Career Opportunity Inquiry"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                  Send Your CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What services do you offer?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer comprehensive consultancy services including Design & Construction, Project 
                  Management, Risk Assessment, Building Surveying, Sustainable Technologies, Contract 
                  Management, and Business Support. Visit our Services page for detailed information.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How quickly can you start a project?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Project timelines vary depending on scope and complexity. After our initial consultation, 
                  we can typically begin preliminary work within 1-2 weeks. We&apos;ll provide a detailed 
                  timeline during our discussion.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you work on both residential and commercial projects?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we have extensive experience with both residential and commercial projects of 
                  various scales. Our multi-disciplinary team can handle projects from single dwellings 
                  to large commercial developments.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How does The Hivals Foundation work?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The Hivals Foundation is our charitable arm that provides pro-bono services to 
                  organizations working on housing, community development, and sustainability projects. 
                  Visit our Foundation page to learn more about our charitable work and partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
