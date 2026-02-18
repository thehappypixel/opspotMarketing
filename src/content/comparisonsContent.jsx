import React from "react";
import securityOperations2026 from "../assets/images/guides/security-operations-2026.png";

const comparisonsContent = [
  {
    id: "opspot-vs-guardspro",
    slug: "opspot-vs-guardspro",
    title:
      "Opspot vs GuardsPro: Helping you choose the right guard management software",
    intro:
      "A practical comparison to help security teams understand key differences in usability, support, and day-to-day operations.",
    readTime: 7,
    image: securityOperations2026,
    imageAlt: "Opspot vs GuardsPro comparison",
    meta: {
      description:
        "Compare Opspot and GuardsPro for security guard management. See differences in onboarding, usability, support, and core features to pick the best fit for your team.",
      keywords:
        "Opspot vs GuardsPro, guard management software comparison, security operations platform comparison",
    },
    articleIntro: (
      <>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          Choosing the right operations platform for your security team isn't
          about picking the one with the flashiest features. It's about finding
          a tool that fits your workflow, supports your team when you need it,
          and lets you focus on delivering great service to your clients.
        </p>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          Below we compare Opspot with GuardsPro, so you can understand key
          differences and decide what's best for your team's needs.
        </p>
      </>
    ),
    sections: [
      {
        title: "Quick snapshot",
        content: (
          <>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  GuardsPro
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A cloud-based security guard management system offering
                  features like GPS tracking, patrol reporting, time clocks,
                  scheduling, and client access. It's positioned as a broadly
                  capable platform for managing daily operations.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Opspot</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A modern guard operations platform built from the ground up
                  for simplicity, responsiveness, and incredible support. It
                  focuses on giving small and growing teams everything they need
                  to manage guard activities, from scheduling to reporting, with
                  an emphasis on ease of use and real-world reliability.
                </p>
              </div>
            </div>
          </>
        ),
      },
      {
        title: "How the two compare",
        content: (
          <>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Here's a practical look at how Opspot and GuardsPro align on key
              capabilities security teams care about:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Feature category</th>
                    <th className="px-4 py-3 font-semibold">GuardsPro</th>
                    <th className="px-4 py-3 font-semibold">Opspot</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">GPS tracking</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Incident/shift reporting</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Scheduling</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Client access/portal</td>
                    <td className="px-4 py-3">Yes</td>
                    <td className="px-4 py-3">Yes</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Ease of getting started</td>
                    <td className="px-4 py-3">Moderate</td>
                    <td className="px-4 py-3">Strong</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Support responsiveness</td>
                    <td className="px-4 py-3">Mixed user feedback</td>
                    <td className="px-4 py-3">Responsive support</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Free access option</td>
                    <td className="px-4 py-3">Trial only</td>
                    <td className="px-4 py-3">Free plan available</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3">Ongoing usability</td>
                    <td className="px-4 py-3">Capable</td>
                    <td className="px-4 py-3">
                      Designed for intuitive daily use
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        title: "What users say",
        content: (
          <>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Online reviews for GuardsPro show a mixture of perspectives:
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  Positives noted by users
                </h3>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-2 ml-2">
                  <li>
                    Many teams report that GuardsPro helps them transition from
                    paper-based reporting and improves overall operations.
                  </li>
                  <li>
                    Users often find features like scheduling and mobile
                    reporting useful and functional.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  Areas of concern mentioned in reviews
                </h3>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-2 ml-2">
                  <li>
                    A recurring theme in user feedback is that customer support
                    can be difficult to reach or slow to respond, with some
                    teams describing limited channels for timely help.
                  </li>
                  <li>
                    Some users have shared that the mobile app experience and
                    interface layout can feel cumbersome or harder to navigate,
                    especially under real world conditions.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              This mix of feedback shows that while GuardsPro provides a solid
              feature set, there are real-world considerations; especially when
              you need quick help or clear guidance.
            </p>
          </>
        ),
      },
      {
        title: "What you might notice with Opspot",
        content: (
          <>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              When small and growing security teams evaluate Opspot, they can
              expect the following:
            </p>
            <ol className="text-sm text-gray-700 list-decimal list-inside space-y-3 ml-2">
              <li>
                <span className="font-semibold">Easy to start and grow.</span>
                <span>
                  {" "}
                  Opspot offers a free plan so teams can begin using core tools
                  without a financial commitment. This makes it easier to get
                  your team onboarded and solve real problems from day one.
                </span>
              </li>
              <li>
                <span className="font-semibold">Smooth everyday workflows.</span>
                <span>
                  {" "}
                  Opspot's design puts emphasis on simple, intuitive workflows.
                  From check-ins and shift assignments to incident reports and
                  guard insights, teams spend less time figuring out the tool
                  and more time managing operations.
                </span>
              </li>
              <li>
                <span className="font-semibold">Support that feels helpful.</span>
                <span>
                  {" "}
                  Many teams consider responsive support a key part of their
                  software experience, not just during onboarding but when
                  challenges pop up in the field. Opspot's support approach is
                  built around being clear, prompt, and easy to reach when you
                  need assistance.
                </span>
              </li>
            </ol>
          </>
        ),
      },
      {
        title: "How to think about your decision",
        content: (
          <>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Rather than asking "which platform is better," here are practical
              questions to guide your choice:
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-3 ml-2">
              <li>
                Do you want to start using the software right away without any
                barrier to entry?
                <div className="text-gray-600 mt-2">
                  Opspot's free plan and straightforward onboarding make this
                  easy.
                </div>
              </li>
              <li>
                Is reliable ongoing support important for your operations?
                <div className="text-gray-600 mt-2">
                  Responsive support can save time and frustration when
                  something matters in a live shift.
                </div>
              </li>
              <li>
                Does your team value a tool that's easy for guards and managers
                to adopt?
                <div className="text-gray-600 mt-2">
                  Opspot's focus on usability helps teams get immediate value
                  without complex setup or heavy training.
                </div>
              </li>
            </ul>
          </>
        ),
      },
    ],
    callout: (
      <>
        <p className="mb-4">
          Both platforms help security teams manage operations digitally instead
          of relying on paperwork or scattered systems. GuardsPro has a solid
          set of capabilities that many teams find valuable over time. Opspot,
          meanwhile, puts a premium on accessibility, support, and ease of
          everyday use; particularly for small and growing teams looking to get
          value quickly and with confidence.
        </p>
        <p className="mb-0">
          Whichever platform you explore first, take time to try it with your
          team, test real workflows, and see how support feels in practice.
          That's often the single biggest factor in long-term satisfaction.
        </p>
      </>
    ),
  },
];

export default comparisonsContent;
