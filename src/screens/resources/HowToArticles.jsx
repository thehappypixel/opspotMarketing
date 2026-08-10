import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function HowToArticlesScreen() {
  const siteUrl = process.env.REACT_APP_SITE_URL || "https://opspot.io";

  return (
    <>
      <Helmet>
        <title>How To Articles - Opspot Security Guard Management Software</title>
        <meta
          name="description"
          content="Step-by-step how-to articles for Opspot security guard management software. Learn how to perform specific tasks and operations."
        />
        <meta
          name="keywords"
          content="security guard software how-to, Opspot tutorials, security operations how-to, guard management tutorials"
        />
        <link rel="canonical" href={`${siteUrl}/resources/how-to-articles`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/resources/how-to-articles`} />
        <meta
          property="og:title"
          content="How To Articles - Opspot Security Guard Management Software"
        />
        <meta
          property="og:description"
          content="Step-by-step how-to articles for Opspot security guard management software."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`${siteUrl}/resources/how-to-articles`} />
        <meta
          property="twitter:title"
          content="How To Articles - Opspot Security Guard Management Software"
        />
        <meta
          property="twitter:description"
          content="Step-by-step how-to articles for Opspot security guard management software."
        />
      </Helmet>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl leading-tight font-bold text-white text-center mb-6">
            How To Articles
          </h1>
          <p className="text-md tracking-wider leading-snug font-normal text-white text-center mb-12">
            Step-by-step instructions for common tasks and operations in Opspot.
          </p>

          {/* Placeholder Section 1 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              How to Set Up Your First Guard Schedule
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Learn how to create and manage guard schedules for your security operations.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 2 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              How to Create and Manage Incident Reports
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Step-by-step guide to creating, tracking, and managing incident reports.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 3 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              How to Generate Activity Reports
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Discover how to create comprehensive activity reports for your security team.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 4 */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-lg font-bold text-white mb-4">
              How to Configure Mobile Guard Settings
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Learn how to configure and customize mobile guard settings for your team.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HowToArticlesScreen;





