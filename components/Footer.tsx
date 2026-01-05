import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const navigation = {
  services: [
    { name: 'Design & Construction', href: '/services#design-construction' },
    { name: 'Project Management', href: '/services#project-management' },
    { name: 'Risk Assessment', href: '/services#risk-assessment' },
    { name: 'Building Surveying', href: '/services#building-surveying' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Hivals Foundation', href: '/foundation' },
    { name: 'News & Updates', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/thehivalsgroup',
      icon: Instagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white">The Hivals Group Limited</h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Multi-disciplinary consultancy delivering expert services in Design & Construction, 
                project management, and sustainable solutions.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact Information</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <a
                    href="mailto:info@thehivalsgroup.co.uk"
                    className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  >
                    info@thehivalsgroup.co.uk
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">Available on request</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm leading-6 text-gray-300">United Kingdom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} The Hivals Group Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
