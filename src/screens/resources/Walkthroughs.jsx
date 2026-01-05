import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function WalkthroughsScreen() {
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>Walkthroughs - Opspot Security Guard Management Software</title>
        <meta
          name="description"
          content="Interactive walkthroughs for Opspot security guard management software. Follow along with detailed walkthroughs of key features and workflows."
        />
        <meta
          name="keywords"
          content="security guard software walkthroughs, Opspot walkthroughs, security operations walkthroughs, guard management walkthroughs"
        />
        <link rel="canonical" href={`${siteUrl}/resources/walkthroughs`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/resources/walkthroughs`} />
        <meta
          property="og:title"
          content="Walkthroughs - Opspot Security Guard Management Software"
        />
        <meta
          property="og:description"
          content="Interactive walkthroughs for Opspot security guard management software."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`${siteUrl}/resources/walkthroughs`} />
        <meta
          property="twitter:title"
          content="Walkthroughs - Opspot Security Guard Management Software"
        />
        <meta
          property="twitter:description"
          content="Interactive walkthroughs for Opspot security guard management software."
        />
      </Helmet>
      <Navigation />
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-xl leading-tight font-bold text-white text-center mb-6">
            Walkthroughs
          </h1>
          <p className="text-md tracking-wider leading-snug font-normal text-white text-center mb-12">
            Interactive walkthroughs to help you master Opspot's features and workflows.
          </p>

          {/* Placeholder Section 1 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Complete System Walkthrough
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              A comprehensive walkthrough of the entire Opspot system from setup to daily operations.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 2 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Mobile Guard App Walkthrough
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Step-by-step walkthrough of the mobile guard application features and functionality.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 3 */}
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Reporting Dashboard Walkthrough
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Learn how to navigate and utilize the reporting dashboard effectively.
            </p>
            <div className="bg-gray-800 rounded p-4 text-gray-400 text-sm">
              Content coming soon...
            </div>
          </div>

          {/* Placeholder Section 4 */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-lg font-bold text-white mb-4">
              Incident Management Workflow Walkthrough
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              Follow along as we walk through the complete incident management workflow.
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

export default WalkthroughsScreen;





