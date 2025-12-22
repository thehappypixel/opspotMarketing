import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { BookOpenIcon, MegaphoneIcon } from "@heroicons/react/24/outline";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import securityOperationsGuidesContent from "../../../content/securityOperationsGuidesContent";

function GuideArticle() {
  const { slug } = useParams();
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  // Find the guide by slug
  const guide = securityOperationsGuidesContent.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <>
        <Navigation />
        <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-white min-h-screen">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-xl leading-tight font-bold text-gray-900 mb-6">
              Guide not found
            </h1>
            <Link
              to="/resources/security-operations-guides"
              className="text-brand-primary hover:text-brand-200"
            >
              Back to guides
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const articleUrl = `${siteUrl}/resources/security-operations-guides/${guide.slug}`;

  return (
    <>
      <Helmet>
        <title>{guide.title} - Opspot Security Guard Management Software</title>
        <meta name="description" content={guide.meta.description} />
        <meta name="keywords" content={guide.meta.keywords} />
        <link rel="canonical" href={articleUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:title" content={`${guide.title} - Opspot`} />
        <meta property="og:description" content={guide.meta.description} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={articleUrl} />
        <meta property="twitter:title" content={`${guide.title} - Opspot`} />
        <meta property="twitter:description" content={guide.meta.description} />
      </Helmet>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Back to guides link */}
          <Link
            to="/resources/security-operations-guides"
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
          </Link>

          {/* Header Section with Image - matches article padding */}
          <div className="px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Content */}
              <div className="flex-1">
                {/* Read time metadata */}
                <div className="flex items-center text-xs text-gray-600 mb-4">
                  <BookOpenIcon className="h-4 w-4 mr-1.5" />
                  <span>{guide.readTime} min read</span>
                </div>

                <h1 className="text-xl leading-tight font-bold text-gray-900">
                  {guide.title}
                </h1>
              </div>

              {/* Right side - Image (larger) */}
              <div className="flex-shrink-0 lg:w-96">
                <img
                  src={guide.image}
                  alt={guide.imageAlt || guide.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="rounded-lg px-8 py-8">
            <div className="prose max-w-2xl">
              {/* Intro Section */}
              {guide.intro && <div>{guide.intro}</div>}

              {/* Sections */}
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
                            src={section.image}
                            alt={section.imageAlt || section.title}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </section>
                ))}
            </div>

            {/* Callout Section */}
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
      <Footer />
    </>
  );
}

export default GuideArticle;
