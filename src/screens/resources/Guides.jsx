import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function GuidesScreen() {
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>Guides - Opspot Security Guard Management Software</title>
        <meta
          name="description"
          content="Comprehensive guides for using Opspot security guard management software. Learn how to optimize your security operations with our detailed guides."
        />
        <meta
          name="keywords"
          content="security guard software guides, Opspot guides, security operations guides, guard management guides"
        />
        <link rel="canonical" href={`${siteUrl}/resources/guides`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/resources/guides`} />
        <meta
          property="og:title"
          content="Guides - Opspot Security Guard Management Software"
        />
        <meta
          property="og:description"
          content="Comprehensive guides for using Opspot security guard management software."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`${siteUrl}/resources/guides`} />
        <meta
          property="twitter:title"
          content="Guides - Opspot Security Guard Management Software"
        />
        <meta
          property="twitter:description"
          content="Comprehensive guides for using Opspot security guard management software."
        />
      </Helmet>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl leading-tight font-bold text-white text-center mb-6">
            Guides
          </h1>
          <p className="text-md tracking-wider leading-snug font-normal text-white text-center mb-12">
            Comprehensive guides to help you get the most out of Opspot security guard management software.
          </p>

          {/* Placeholder Section 1 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Getting Started Guide
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Learn the basics of setting up and using Opspot for your security operations.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 2 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Advanced Configuration Guide
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Explore advanced features and customization options available in Opspot.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 3 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Best Practices Guide
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Discover best practices for managing your security operations efficiently.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 4 */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Troubleshooting Guide
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Find solutions to common issues and learn how to troubleshoot problems.
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

export default GuidesScreen;

