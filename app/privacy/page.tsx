import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Cookie Policy for The Hivals Foundation. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-blue-100">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg prose-blue max-w-none">

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              The Hivals Foundation (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy and personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              at www.thehivalsgroup.co.uk.
            </p>
            <p className="text-gray-600 mb-4">
              We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              Please read this policy carefully to understand our practices regarding your personal data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Data Controller</h2>
            <p className="text-gray-600 mb-4">
              The Hivals Foundation is the data controller responsible for your personal data. If you have any questions
              about this Privacy Policy or our data practices, please contact us at:
            </p>
            <ul className="list-none text-gray-600 mb-4 pl-0">
              <li>Email: info@thehivalsgroup.co.uk</li>
              <li>Address: United Kingdom</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information We Collect</h2>
            <p className="text-gray-600 mb-4">We may collect the following types of personal information:</p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide</h3>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Contact information (name, email address, phone number)</li>
              <li>Enquiry details submitted through our contact form</li>
              <li>Any other information you choose to provide to us</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information Collected Automatically</h3>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>To respond to your enquiries and provide our services</li>
              <li>To send you information you have requested</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To analyse website usage and performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Legal Basis for Processing</h2>
            <p className="text-gray-600 mb-4">We process your personal data based on the following legal grounds:</p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li><strong>Consent:</strong> Where you have given us explicit consent to process your data (e.g., marketing communications)</li>
              <li><strong>Contract:</strong> Where processing is necessary to fulfil a contract with you</li>
              <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate business interests, provided these do not override your rights</li>
              <li><strong>Legal obligation:</strong> Where we are required to process your data by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
            <p className="text-gray-600 mb-4">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device
              that help us analyse website traffic and remember your preferences.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Types of Cookies We Use</h3>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li><strong>Strictly Necessary Cookies:</strong> Essential for the website to function properly. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous statistical information.</li>
              <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Managing Cookies</h3>
            <p className="text-gray-600 mb-4">
              When you first visit our website, you will be presented with a cookie consent banner where you can accept all cookies,
              reject non-essential cookies, or customise your preferences. You can change your cookie preferences at any time by
              clearing your browser cookies and revisiting our website.
            </p>
            <p className="text-gray-600 mb-4">
              You can also control cookies through your browser settings. Please note that disabling certain cookies may affect
              the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Service providers who assist us in operating our website and business (e.g., email service providers)</li>
              <li>Professional advisers such as lawyers and accountants</li>
              <li>Law enforcement or regulatory bodies when required by law</li>
            </ul>
            <p className="text-gray-600 mb-4">
              All third parties are required to respect the security of your personal data and treat it in accordance with the law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Data Retention</h2>
            <p className="text-gray-600 mb-4">
              We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected,
              including to satisfy any legal, accounting, or reporting requirements. Contact form submissions are typically
              retained for 2 years unless you request earlier deletion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Your Rights</h2>
            <p className="text-gray-600 mb-4">
              Under UK GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li><strong>Right of access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
              <li><strong>Right to restrict processing:</strong> Request limitation of how we use your data</li>
              <li><strong>Right to data portability:</strong> Request transfer of your data to another organisation</li>
              <li><strong>Right to object:</strong> Object to processing based on legitimate interests or for marketing</li>
              <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time where processing is based on consent</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise any of these rights, please contact us using the details provided above. We will respond to your
              request within one month.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-600 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to read the privacy policies of any website you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Policy</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
              &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Complaints</h2>
            <p className="text-gray-600 mb-4">
              If you have any concerns about how we handle your personal data, please contact us first. If you are not
              satisfied with our response, you have the right to lodge a complaint with the Information Commissioner&apos;s
              Office (ICO):
            </p>
            <ul className="list-none text-gray-600 mb-4 pl-0">
              <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:underline">ico.org.uk</a></li>
              <li>Phone: 0303 123 1113</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please{' '}
                <Link href="/contact" className="text-blue-800 hover:underline">
                  contact us
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
