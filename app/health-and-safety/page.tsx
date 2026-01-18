import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Health and Safety Policy',
  description: 'Health and Safety Policy for The Hivals Group Limited. Our commitment to maintaining a safe working environment for all employees, contractors, and visitors.',
};

export default function HealthAndSafetyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Health and Safety Policy
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

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Policy Statement</h2>
            <p className="text-gray-600 mb-4">
              The Hivals Group Limited is committed to ensuring the health, safety, and welfare of all employees,
              contractors, clients, and visitors affected by our business activities. We recognise that effective
              health and safety management is integral to our success and reputation.
            </p>
            <p className="text-gray-600 mb-4">
              We will comply with all applicable health and safety legislation, including the Health and Safety
              at Work etc. Act 1974, the Management of Health and Safety at Work Regulations 1999, and all other
              relevant statutory requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Our Commitments</h2>
            <p className="text-gray-600 mb-4">The Hivals Group Limited is committed to:</p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Providing and maintaining safe working environments, plant, and systems of work</li>
              <li>Ensuring safe handling, storage, and use of substances and materials</li>
              <li>Providing adequate information, instruction, training, and supervision to enable all employees to work safely</li>
              <li>Consulting with employees on matters affecting their health and safety</li>
              <li>Providing and maintaining safe access and egress to all workplaces</li>
              <li>Providing adequate welfare facilities for all employees</li>
              <li>Regularly reviewing and updating this policy and our safety procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Management Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              Senior management has overall responsibility for health and safety within the organisation. This includes:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Allocating sufficient resources to implement this policy effectively</li>
              <li>Ensuring that health and safety is given appropriate priority in all business decisions</li>
              <li>Setting health and safety objectives and monitoring performance against them</li>
              <li>Ensuring that all employees receive appropriate health and safety training</li>
              <li>Investigating accidents and incidents and implementing corrective actions</li>
              <li>Regularly reviewing and updating risk assessments</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Employee Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              All employees have a duty to:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Take reasonable care for their own health and safety and that of others who may be affected by their actions</li>
              <li>Cooperate with management on health and safety matters</li>
              <li>Use equipment and substances in accordance with training and instructions provided</li>
              <li>Report any hazards, defects, or concerns to their supervisor or manager immediately</li>
              <li>Not interfere with or misuse anything provided for health and safety purposes</li>
              <li>Attend and participate in health and safety training as required</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Risk Assessment</h2>
            <p className="text-gray-600 mb-4">
              We conduct comprehensive risk assessments for all work activities to identify potential hazards and
              implement appropriate control measures. Risk assessments are:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Carried out by competent persons</li>
              <li>Documented and communicated to all relevant personnel</li>
              <li>Reviewed regularly and updated when circumstances change</li>
              <li>Used to inform safe systems of work and method statements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Training and Competence</h2>
            <p className="text-gray-600 mb-4">
              We ensure that all employees receive adequate health and safety training appropriate to their role,
              including:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Induction training for all new employees</li>
              <li>Task-specific training for particular work activities</li>
              <li>Refresher training at appropriate intervals</li>
              <li>Specialist training for those with specific health and safety responsibilities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Accident and Incident Reporting</h2>
            <p className="text-gray-600 mb-4">
              All accidents, incidents, and near misses must be reported immediately to management. We investigate
              all incidents to identify root causes and implement measures to prevent recurrence. Serious incidents
              are reported to the Health and Safety Executive (HSE) in accordance with RIDDOR requirements.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Emergency Procedures</h2>
            <p className="text-gray-600 mb-4">
              We maintain emergency procedures for fire, first aid, and other emergencies. These procedures are:
            </p>
            <ul className="list-disc text-gray-600 mb-4 pl-6">
              <li>Documented and displayed prominently in the workplace</li>
              <li>Communicated to all employees through training</li>
              <li>Practised through regular drills</li>
              <li>Reviewed and updated as necessary</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contractors and Visitors</h2>
            <p className="text-gray-600 mb-4">
              We require all contractors working on our behalf to demonstrate competence in health and safety and
              comply with our health and safety requirements. Visitors to our premises are briefed on relevant
              safety information and emergency procedures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Monitoring and Review</h2>
            <p className="text-gray-600 mb-4">
              We monitor our health and safety performance through regular inspections, audits, and reviews. This
              policy is reviewed annually, or sooner if there are significant changes to our operations or
              legislation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Health and Safety Policy or wish to report a health and safety
              concern, please contact us at:
            </p>
            <ul className="list-none text-gray-600 mb-4 pl-0">
              <li>Email: info@thehivalsgroup.co.uk</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                If you have any questions about this policy, please{' '}
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
