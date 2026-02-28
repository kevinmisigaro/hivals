'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Metadata } from 'next';

const faqs = [
  {
    question: 'What is CDM and pre-construction information?',
    answer: `The Construction (Design and Management) Regulations 2015 (CDM 2015) are the main set of regulations for managing the health, safety and welfare of construction projects in Great Britain. CDM applies to all building and construction work, including new build, demolition, refurbishment, extensions, conversions, repair, and maintenance.

Pre-construction information is a key requirement under CDM. It is information gathered by the client and principal designer before and during the design phase, and is provided to those tendering for or appointed to carry out or manage construction work. It includes details such as the project description, existing structures and site hazards, ground conditions, and any existing health and safety file.

At Hivals, we help clients fulfil their CDM duties by acting as principal designer, producing pre-construction information packs, and coordinating health and safety throughout the design process.`,
  },
  {
    question: 'What is planned preventative maintenance, and how do I choose the best maintenance strategy for Domestic and Non-Domestic schemes?',
    answer: `Planned Preventative Maintenance (PPM) is a proactive approach to building maintenance that involves scheduling regular inspections and servicing of building elements and systems before faults or failures occur. PPM helps extend the lifespan of assets, reduces emergency repair costs, ensures statutory compliance, and minimises disruption to occupants.

For **domestic schemes**, PPM typically covers annual boiler servicing, gutter and roof inspections, electrical testing (EICR), and external decorations on a cyclical basis. The appropriate strategy depends on the age and condition of the property, lease obligations, and budget.

For **non-domestic (commercial) schemes**, a more comprehensive approach is required. This includes M&E servicing schedules, fire safety system testing, lift maintenance, façade inspections, and compliance with statutory obligations such as Legionella risk assessments. A well-structured PPM programme is usually informed by a building condition survey and asset register.

Choosing the best strategy involves balancing upfront investment against long-term savings, aligning with legal requirements, and prioritising critical systems. Our team can produce bespoke PPM schedules and condition surveys to help landlords, facilities managers, and building owners plan and budget effectively.`,
  },
  {
    question: 'What are JCT and NEC contract forms?',
    answer: `JCT (Joint Contracts Tribunal) and NEC (New Engineering Contract) are the two most widely used families of standard form construction contracts in the United Kingdom.

**JCT contracts** are commonly used on traditional building projects. They set out the legal framework between the employer and contractor, covering matters such as payment, variations, defects, insurance, and dispute resolution. Popular JCT forms include the Standard Building Contract, Minor Works Contract, Design and Build Contract, and Intermediate Building Contract. JCT contracts are well-established and familiar to most contractors operating in the private sector.

**NEC contracts** (now in their fourth edition, NEC4) were developed to promote collaborative working and active project management. They are widely used on public sector and infrastructure projects. NEC contracts are written in clear, plain English and place a strong emphasis on early warning of problems and collaborative programme management. The NEC Engineering and Construction Contract (ECC) is the most frequently used form.

Choosing the right contract depends on the nature of the project, procurement route, client requirements, risk allocation, and the sector in which you are working. Hivals can advise on contract selection, administer contracts on your behalf, and support dispute avoidance throughout the project.`,
  },
  {
    question: 'What are building regulations and planning permission?',
    answer: `**Planning permission** and **building regulations** are two separate statutory regimes that often apply to construction and development works, though they serve different purposes.

**Planning permission** is granted by the Local Planning Authority (LPA) and controls whether a development can take place at all, based on its impact on the environment, local character, and land use. Factors considered include the size, appearance, and location of the proposed development, its effect on neighbouring properties, and its compliance with local and national planning policy. Some minor works are covered by Permitted Development rights and do not require a formal planning application.

**Building regulations** are approved by Building Control (either local authority or an approved inspector) and govern the technical standards to which building work must be carried out. They cover structural stability, fire safety, insulation and energy efficiency, ventilation, drainage, accessibility, and more. Building regulations approval is required even when planning permission is not needed.

In practice, most significant construction projects require both. Hivals can advise you on which consents apply to your project and assist with preparing and submitting the necessary applications.`,
  },
  {
    question: 'How do I apply for planning permission, and what is the process?',
    answer: `The planning application process in England involves several key stages:

1. **Pre-application advice** – Before submitting an application, it is often beneficial to seek pre-application advice from the Local Planning Authority. This can help identify any issues early and increase the likelihood of a successful submission.

2. **Prepare the application** – This involves producing drawings (location plan, site plan, floor plans, elevations), completing the standard application form, and preparing any supporting documents such as a Design and Access Statement, Heritage Statement, or Flood Risk Assessment, depending on the nature of the proposal.

3. **Submit the application** – Applications are submitted via the Planning Portal (for England) along with the applicable fee. The LPA acknowledges receipt and validates the application once all required documents are in order.

4. **Consultation and publicity** – The LPA consults statutory consultees (e.g., highways, environment agency, Historic England) and publicises the application. Neighbours and the public have the opportunity to comment.

5. **Assessment and decision** – A planning officer assesses the application against national and local planning policy and makes a recommendation. Most householder applications are decided by officers under delegated powers; larger or more complex applications may go to a Planning Committee. A decision is typically issued within 8 weeks for most applications, or 13 weeks for major developments.

6. **Post-decision** – If approved, any pre-commencement conditions must be discharged before work begins. If refused, you may have the right to appeal to the Planning Inspectorate.

Hivals can manage the entire planning process on your behalf, from initial feasibility through to discharge of conditions.`,
  },
  {
    question: 'What are the roles of health & safety and risk management in construction projects?',
    answer: `Health and safety and risk management are fundamental to the successful delivery of construction projects. They protect workers, visitors, and the public, ensure legal compliance, and help avoid costly incidents that can delay programmes and damage reputations.

**Key roles under CDM 2015 include:**

- **Client** – Responsible for appointing the right people, ensuring sufficient time and resources are allocated, and maintaining the health and safety file.
- **Principal Designer** – Coordinates health and safety during the pre-construction phase, manages design risk, and produces the pre-construction information pack.
- **Principal Contractor** – Manages health and safety on site during the construction phase, produces the construction phase plan, and ensures cooperation between contractors.
- **Designers** – Eliminate or reduce foreseeable risks through their design decisions and provide information about residual risks.
- **Contractors** – Plan, manage, and monitor their own work to ensure it is carried out safely.

**Risk management** involves identifying potential hazards early, assessing their likelihood and impact, and implementing control measures to reduce risk to as low as reasonably practicable (ALARP). This includes producing method statements, risk assessments, and maintaining an up-to-date construction phase plan.

Hivals provides health and safety advisory services and can act as Principal Designer on your project, ensuring regulatory compliance from inception through to completion.`,
  },
  {
    question: 'What are the stages of Project Brief Development?',
    answer: `Project brief development is the process by which the client's requirements are articulated, refined, and agreed before and during the design process. A well-developed brief is critical to ensuring that the completed project meets the client's needs and avoids costly changes later.

The stages of project brief development typically follow the RIBA Plan of Work:

**Stage 0 – Strategic Definition**
The client identifies the need for a project and explores the strategic options for meeting that need. A Strategic Brief is produced outlining the high-level requirements, budget parameters, and programme aspirations.

**Stage 1 – Preparation and Briefing**
The project team is appointed and the Initial Project Brief is developed. This document sets out the client's requirements in detail, including spatial requirements, functional relationships, performance standards, and sustainability targets. Site appraisals, feasibility studies, and stakeholder engagement typically take place at this stage.

**Stage 2 – Concept Design**
The Initial Project Brief is further developed into a Final Project Brief as the concept design evolves. Any changes to the brief at this stage should be carefully managed, as changes after Stage 2 can significantly increase costs.

**Stages 3 onwards – Design Development and Construction**
The brief should be frozen by the end of Stage 2. Subsequent stages focus on developing and delivering the design in accordance with the agreed brief.

Hivals supports clients through all stages of brief development, helping to translate aspirations into clear, deliverable project requirements.`,
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-blue-100">
              Answers to common questions about construction, project management, and our services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between px-6 py-5 text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-blue-800 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="px-6 pb-6">
                    <div className="text-sm text-gray-600 leading-7 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </dd>
                )}
              </div>
            ))}
          </dl>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Have a question that isn&apos;t answered here?{' '}
              <a href="/contact" className="text-blue-800 hover:underline font-medium">
                Get in touch with our team
              </a>{' '}
              and we&apos;ll be happy to help.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
