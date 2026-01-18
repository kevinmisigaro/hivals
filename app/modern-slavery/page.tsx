import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement',
  description: 'Modern Slavery Statement for The Hivals Group Limited. Our commitment to preventing modern slavery and human trafficking in our business and supply chains.',
};

export default function ModernSlaveryPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Modern Slavery Statement
            </h1>
            <p className="text-lg text-blue-100">
              Financial Year 2024/2025
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
              This statement is made pursuant to Section 54 of the Modern Slavery Act 2015 and sets out the steps
              that The Hivals Group Limited has taken, and continues to take, to ensure that modern slavery and
              human trafficking is not taking place within our business or supply chain.
            </p>
            <p className="text-gray-600 mb-4">
              Modern slavery is a crime and a violation of fundamental human rights. It takes various forms, such
              as slavery, servitude, forced and compulsory labour, and human trafficking, all of which have in
              common the deprivation of a person&apos;s liberty by another in order to exploit them for personal or
              commercial gain.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Our Business</h2>
            <p className="text-gray-600 mb-4">
              The Hivals Group Limited is a multi-disciplinary consultancy providing expert services in Design &
              Construction, project management, risk assessment, and building surveying. We operate primarily in
              the United Kingdom.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              We are committed to acting ethically and with integrity in all our business dealings and relationships,
              and to implementing and enforcing effective systems and controls to ensure modern slavery is not taking
              place anywhere in our own business or in any of our supply chains.
            </p>
            <p className="text-gray-600 mb-4">
              We are also committed to ensuring there is transparency in our own business and in our approach to
              tackling modern slavery throughout our supply chains, consistent with our disclosure obligations under
              the Modern Slavery Act 2015.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Our Supply Chains</h2>
            <p className="text-gray-600 mb-4">
              Our supply chains include:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Professional service providers and consultants</li>
              <li>Technology and software suppliers</li>
              <li>Office supplies and equipment providers</li>
              <li>Contractors and subcontractors for project delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Our Policies</h2>
            <p className="text-gray-600 mb-4">
              We operate the following policies that support our commitment to preventing modern slavery:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li><strong>Recruitment Policy:</strong> We operate a robust recruitment process, including conducting
                eligibility to work in the UK checks for all employees to safeguard against human trafficking</li>
              <li><strong>Whistleblowing Policy:</strong> We encourage all employees, customers, and suppliers to
                report any concerns related to our activities or supply chains</li>
              <li><strong>Supplier Code of Conduct:</strong> We expect our suppliers to adhere to our values and
                ethical standards, including provisions against modern slavery</li>
              <li><strong>Equal Opportunities Policy:</strong> We are committed to creating a working environment
                free from discrimination</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Due Diligence</h2>
            <p className="text-gray-600 mb-4">
              As part of our initiative to identify and mitigate risk, we:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Assess potential suppliers before they enter our supply chain</li>
              <li>Review our existing suppliers on a regular basis</li>
              <li>Require all suppliers to confirm they comply with modern slavery legislation</li>
              <li>Include modern slavery provisions in our contracts with suppliers</li>
              <li>Investigate any concerns raised about modern slavery practices</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Risk Assessment</h2>
            <p className="text-gray-600 mb-4">
              We consider the following factors when assessing modern slavery risk in our supply chains:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>The nature of the goods or services being provided</li>
              <li>The geographical location of suppliers</li>
              <li>The use of temporary or agency labour</li>
              <li>The complexity and transparency of supply chains</li>
            </ul>
            <p className="text-gray-600 mb-4">
              We have assessed our supply chains and consider the risk of modern slavery to be relatively low due
              to the nature of our business as a professional services consultancy. However, we remain vigilant and
              committed to continuous improvement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Training and Awareness</h2>
            <p className="text-gray-600 mb-4">
              To ensure a high level of understanding of the risks of modern slavery, we provide training and
              information to our staff. We are committed to ensuring that our staff are aware of:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>The nature and scale of modern slavery</li>
              <li>How to identify potential victims</li>
              <li>The procedures for reporting concerns</li>
              <li>Our expectations of suppliers regarding modern slavery</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Reporting Concerns</h2>
            <p className="text-gray-600 mb-4">
              We encourage anyone who has concerns about modern slavery in any part of our business or supply chain
              to report them. Reports can be made through:
            </p>
            <ul className="list-none text-gray-600 mb-4 pl-0">
              <li>Email: info@thehivalsgroup.co.uk</li>
            </ul>
            <p className="text-gray-600 mb-4">
              All reports will be treated in confidence and investigated thoroughly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Our Progress</h2>
            <p className="text-gray-600 mb-4">
              We continue to develop and strengthen our approach to tackling modern slavery. Our key actions include:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Regular review of our policies and procedures</li>
              <li>Ongoing assessment of our supply chain risks</li>
              <li>Training and awareness programmes for our staff</li>
              <li>Engagement with suppliers on modern slavery issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Approval</h2>
            <p className="text-gray-600 mb-4">
              This statement has been approved by the Board of Directors of The Hivals Group Limited and will be
              reviewed and updated annually.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                If you have any questions about this statement, please{' '}
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
