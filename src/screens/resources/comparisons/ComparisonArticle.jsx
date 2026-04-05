import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { BookOpenIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import comparisonsContent from "../../../content/comparisonsContent";

function ComparisonArticle() {
  const { slug } = useParams();
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  const comparison = comparisonsContent.find((item) => item.slug === slug);

  if (!comparison) {
    return (
      <>
        <Navigation />
        <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-white min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl leading-tight font-bold text-gray-900 mb-6">
              Comparison not found
            </h1>
            <Link
              to="/ressources/comparisons"
              className="text-brand-primary hover:text-brand-200"
            >
              Back to comparisons
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const articleUrl = `${siteUrl}/ressources/comparisons/${comparison.slug}`;

  return (
    <>
      <Helmet>
        <title>{comparison.title} - Opspot</title>
        <meta name="description" content={comparison.meta.description} />
        <meta name="keywords" content={comparison.meta.keywords} />
        <link rel="canonical" href={articleUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={`${comparison.title} - Opspot`} />
        <meta
          property="og:description"
          content={comparison.meta.description}
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={articleUrl} />
        <meta
          property="twitter:title"
          content={`${comparison.title} - Opspot`}
        />
        <meta
          property="twitter:description"
          content={comparison.meta.description}
        />
      </Helmet>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/ressources/comparisons"
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
            Back to comparisons
          </Link>

          {/* Header Section */}
          <div className="px-8 py-4">
            <div className="flex flex-col gap-8">
              <div>
                {comparison.readTime && (
                  <div className="flex items-center text-xs text-gray-600 mb-4">
                    <BookOpenIcon className="h-4 w-4 mr-1.5" />
                    <span>{comparison.readTime} min read</span>
                  </div>
                )}

                <h1 className="text-xl leading-tight font-bold text-gray-900">
                  {comparison.title}
                </h1>
              </div>
            </div>
          </div>

          <article className="rounded-lg px-8 py-8">
            <div className="prose max-w-2xl">
              {comparison.articleIntro && <div>{comparison.articleIntro}</div>}

              {comparison.sections &&
                comparison.sections.map((section, index) => (
                  <section key={index} className="mb-12 last:mb-0">
                    {section.title && (
                      <h2 className="text-md font-bold text-gray-900 mb-4 mt-12 first:mt-0">
                        {section.title}
                      </h2>
                    )}
                    <div>{section.content}</div>
                  </section>
                ))}
            </div>

            {comparison.callout && (
              <div className="max-w-2xl mt-8">
                <div className="bg-gray-50 border-l-4 border-brand-primary rounded-md p-6 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center">
                      <MegaphoneIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xsm text-gray-700 leading-relaxed">
                      {comparison.callout}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ComparisonArticle;
