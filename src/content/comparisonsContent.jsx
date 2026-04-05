import React from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
const comparisonsContent = [
  {
    id: "opspot-vs-guardspro",
    slug: "opspot-vs-guardspro",
    title: "Opspot vs GuardsPro",
    intro:
      "A practical comparison to help security teams understand key differences in usability, support, and day-to-day operations.",
    readTime: 7,
    meta: {
      description:
        "Compare Opspot and GuardsPro for security guard management. See differences in onboarding, usability, support, and core features to pick the best fit for your team.",
      keywords:
        "Opspot vs GuardsPro, guard management software comparison, security operations platform comparison",
    },
    articleIntro: (
      <>
        <p className="text-md text-gray-700 mb-6 leading-relaxed">
          Choosing the right operations platform for your security team isn't
          about picking the one with the flashiest features. It's about finding
          a tool that fits your workflow, supports your team when you need it,
          and lets you focus on delivering great service to your clients.
        </p>
        <p className="text-md text-gray-700 mb-12 leading-relaxed">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-25 border border-gray-100 rounded-lg p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  GuardsPro
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A cloud-based guard management system with GPS tracking,
                  patrol reporting, time clocks, scheduling, and client access.
                  It's a broadly capable platform for handling daily security
                  operations.
                </p>
              </div>
              <div className="bg-gray-25 border border-gray-100 rounded-lg p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Opspot</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A modern guard operations platform built from the ground up
                  for simplicity, responsiveness, and incredible support. It
                  focuses on giving small and growing teams what they need to
                  manage guard activities day to day, with a strong emphasis on
                  usability and real-world reliability.
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
              <div className="rounded-lg border border-gray-100 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-brand-25 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">
                      Feature category
                    </th>
                    <th className="px-4 py-3 font-semibold">GuardsPro</th>
                    <th className="px-4 py-3 font-semibold">Opspot</th>
                  </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">GPS tracking</td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-gray-500" />
                      </td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-brand-primary" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Incident/shift reporting</td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-gray-500" />
                      </td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-brand-primary" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Scheduling</td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-gray-500" />
                      </td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-brand-primary" />
                      </td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Client access/portal</td>
                      <td className="px-4 py-3">
                        <CheckCircleIcon className="h-5 w-5 text-gray-500" />
                      </td>
                      <td className="px-4 py-3">Not available</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Ease of getting started</td>
                      <td className="px-4 py-3">Moderate</td>
                      <td className="px-4 py-3">Strong</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Support responsiveness</td>
                      <td className="px-4 py-3">Mixed user feedback</td>
                      <td className="px-4 py-3">Responsive support</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Free access option</td>
                      <td className="px-4 py-3">Trial only</td>
                      <td className="px-4 py-3">Free plan available</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Ongoing usability</td>
                      <td className="px-4 py-3">Capable</td>
                      <td className="px-4 py-3">
                        Designed for intuitive daily use
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
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
                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5 text-amber-500" />
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
            <dl className="text-sm text-gray-700 space-y-1">
              <dt>
                <strong>Question:</strong> Do you want to start using the software right away without any
                barrier to entry?
              </dt>
              <dd className="pb-4">
                  <strong>Answer:</strong> Opspot's free plan and straightforward onboarding make this
                  easy.
               </dd>
              
              <dt>
                <strong>Question:</strong> Is reliable ongoing support important for your operations?
                </dt>
                <dd>
                
                  <strong>Answer:</strong> Responsive support can save time and frustration when
                  something matters in a live shift.
                  </dd>
              <dt>
                <strong>Question:</strong> Does your team value a tool that's easy for guards and managers
                to adopt?
                </dt>
                <dd>
                  <strong>Answer:</strong> Opspot's focus on usability helps teams get immediate value
                  without complex setup or heavy training.
                  </dd>
            </dl>
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
  {
    id: "opspot-vs-tracktik",
    slug: "opspot-vs-tracktik",
    title: "Opspot vs TrackTik",
    intro:
      "A practical comparison that highlights differences in scale, setup complexity, and day-to-day usability.",
    readTime: 8,
    meta: {
      description:
        "Compare Opspot and TrackTik for guard management. See differences in scale, onboarding complexity, support, and usability to choose the right fit.",
      keywords:
        "Opspot vs TrackTik, guard management software comparison, security workforce management comparison",
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
          Below we compare Opspot with TrackTik, so you can understand key
          differences and decide what's best for your team's needs.
        </p>
      </>
    ),
    sections: [
      {
        title: "Quick snapshot",
        content: (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">
                  TrackTik
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A comprehensive workforce management platform often used by
                  larger security organizations. It includes GPS tracking,
                  real-time analytics, scheduling, reporting, and client
                  portals, with implementation typically tailored to the
                  organization.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-5">
                <h3 className="text-sm font-bold text-gray-900 mb-2">Opspot</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A modern guard operations platform built for simplicity,
                  responsiveness, and dependable support. It helps small and
                  growing teams manage guard activities with easy adoption and
                  real-world reliability.
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
              Here's a practical look at how Opspot and TrackTik align on key
              capabilities security teams care about:
            </p>
            <div className="overflow-x-auto">
              <div className="rounded-lg border border-gray-100 overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-brand-25 text-gray-700">
                    <tr>
                      <th className="px-4 py-3 font-semibold">
                        Feature category
                      </th>
                      <th className="px-4 py-3 font-semibold">TrackTik</th>
                      <th className="px-4 py-3 font-semibold">Opspot</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">GPS tracking</td>
                      <td className="px-4 py-3">Enterprise-scale tracking</td>
                      <td className="px-4 py-3">Easy and intuitive</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Incident/shift reporting</td>
                      <td className="px-4 py-3">Highly configurable</td>
                      <td className="px-4 py-3">Easy to use</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Scheduling</td>
                      <td className="px-4 py-3">Advanced workflows</td>
                      <td className="px-4 py-3">Effective and simple</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Client access/portal</td>
                      <td className="px-4 py-3">White-labeled portals</td>
                      <td className="px-4 py-3">Not available</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Ease of getting started</td>
                      <td className="px-4 py-3">Complex</td>
                      <td className="px-4 py-3">Strong</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Support responsiveness</td>
                      <td className="px-4 py-3">
                        Varies by enterprise contract
                      </td>
                      <td className="px-4 py-3">Responsive support</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Free access option</td>
                      <td className="px-4 py-3">Not available</td>
                      <td className="px-4 py-3">Free plan available</td>
                    </tr>
                    <tr className="border-t border-gray-100">
                      <td className="px-4 py-3">Ongoing usability</td>
                      <td className="px-4 py-3">Powerful but complex</td>
                      <td className="px-4 py-3">
                        Designed for intuitive daily use
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ),
      },
      {
        title: "What users say",
        content: (
          <>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Feedback on TrackTik reflects its strength as a full-featured
              system for large teams, but also highlights some real-world
              considerations:
            </p>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
                  Positives noted by users
                </h3>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-2 ml-2">
                  <li>
                    Users appreciate real-time visibility into field operations,
                    scheduling, reporting, and analytics.
                  </li>
                  <li>
                    TrackTik's features integrate many aspects of guard
                    operations into one platform.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <ExclamationTriangleIcon className="h-5 w-5 text-amber-500" />
                  Areas of concern mentioned in reviews
                </h3>
                <ul className="text-sm text-gray-700 list-disc list-inside space-y-2 ml-2">
                  <li>
                    Some reviewers describe the platform as complex to set up
                    and use, especially for smaller teams.
                  </li>
                  <li>
                    A number of teams report slowdowns, mobile app quirks, or
                    interface frustrations in everyday use.
                  </li>
                  <li>
                    Pricing and contract terms are customized and not readily
                    visible, which can make cost evaluation harder for smaller
                    teams.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-4 leading-relaxed">
              This mix of feedback shows that while TrackTik provides extensive
              capabilities, particularly for larger operations, there can be
              real-world trade-offs around complexity, setup investment, and
              clarity on cost.
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
                  Opspot's design emphasizes simple, intuitive workflows. From
                  check-ins and shift assignments to incident reports and guard
                  insights, teams spend less time figuring out the tool and more
                  time managing operations.
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
            <dl className="text-sm text-gray-700 space-y-1">
              <dt>
                <strong>Question:</strong> Do you need a solution for a large or
                complex operation with deep analytics and enterprise-grade
                workflows?
              </dt>
              <dd className="pb-4">
                <strong>Answer:</strong> TrackTik's comprehensive feature set
                and customizable implementation can be a strong fit.
              </dd>

              <dt>
                <strong>Question:</strong> Do you want to start using software
                right away without barriers like long contracts or complex
                setup?
              </dt>
              <dd className="pb-4">
                <strong>Answer:</strong> Opspot's free plan and straightforward
                onboarding make this easy.
              </dd>

              <dt>
                <strong>Question:</strong> Is ease of use a priority for your
                team?
              </dt>
              <dd>
                <strong>Answer:</strong> A more streamlined platform can reduce
                training time and improve day-to-day efficiency.
              </dd>
            </dl>
          </>
        ),
      },
    ],
    callout: (
      <>
        <p className="mb-4">
          Both platforms help security teams manage operations digitally instead
          of relying on paperwork or scattered systems. TrackTik has a broad
          set of capabilities that many larger teams find valuable for complex,
          enterprise-level operations. Opspot, meanwhile, puts a premium on
          accessibility, support, and ease of everyday use, particularly for
          small and growing teams looking to get value quickly and with
          confidence.
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
