import React from "react";
import { BookOpenIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import { imgSrc } from "../utils/img";

// Renders a single guide's article body. Server-rendered (no JS). The `guide`
// object (with JSX articleIntro/sections/callout) is passed in from the Astro
// [slug] page.
export default function GuideArticleBody({ guide }) {
  return (
    <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <a
          href="/resources/security-operations-guides"
          className="inline-flex items-center text-xsm text-gray-600 hover:text-gray-900 mb-8 transition duration-150 ease-in-out"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to security operations guides
        </a>

        <div className="px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center text-xs text-gray-600 mb-4">
                <BookOpenIcon className="h-4 w-4 mr-1.5" />
                <span>{guide.readTime} min read</span>
              </div>

              <h1 className="text-xl leading-tight font-bold text-gray-900">
                {guide.title}
              </h1>
            </div>

            {guide.image && (
              <div className="flex-shrink-0 lg:w-96">
                <img
                  src={imgSrc(guide.image)}
                  alt={guide.imageAlt || guide.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            )}
          </div>
        </div>

        <article className="rounded-lg px-8 py-8">
          <div className="prose max-w-2xl">
            {guide.articleIntro && <div>{guide.articleIntro}</div>}

            {guide.sections &&
              guide.sections.map((section, index) => (
                <section key={index} className="mb-12 last:mb-0">
                  {section.title && (
                    <h2 className="text-md font-bold text-gray-900 mb-4 mt-12 first:mt-0">
                      {section.title}
                    </h2>
                  )}
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className={section.image ? "flex-1" : "w-full"}>
                      {section.content}
                    </div>
                    {section.image && (
                      <div className="flex-shrink-0 lg:w-64">
                        <img
                          src={imgSrc(section.image)}
                          alt={section.imageAlt || section.title}
                          className="w-full h-auto rounded-lg object-cover"
                        />
                      </div>
                    )}
                  </div>
                </section>
              ))}
          </div>

          {guide.callout && (
            <div className="max-w-2xl mt-8">
              <div className="bg-gray-50 border-l-4 border-brand-primary rounded-md p-6 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
                    <MegaphoneIcon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-xsm text-gray-700 leading-relaxed">
                    {guide.callout}
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
