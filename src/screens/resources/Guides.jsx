import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import GuideCard from "../../components/guideCard";
import securityOperationsGuidesContent from "../../content/securityOperationsGuidesContent";

function GuidesScreen() {
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>
          Security Operations Guides - Opspot Security Guard Management Software
        </title>
        <meta
          name="description"
          content="Comprehensive security operations guides for using Opspot security guard management software. Learn how to optimize your security operations with our detailed guides."
        />
        <meta
          name="keywords"
          content="security guard software guides, Opspot guides, security operations guides, guard management guides"
        />
        <link
          rel="canonical"
          href={`${siteUrl}/resources/security-operations-guides`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${siteUrl}/resources/security-operations-guides`}
        />
        <meta
          property="og:title"
          content="Security Operations Guides - Opspot Security Guard Management Software"
        />
        <meta
          property="og:description"
          content="Comprehensive security operations guides for using Opspot security guard management software."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:url"
          content={`${siteUrl}/resources/security-operations-guides`}
        />
        <meta
          property="twitter:title"
          content="Security Operations Guides - Opspot Security Guard Management Software"
        />
        <meta
          property="twitter:description"
          content="Comprehensive security operations guides for using Opspot security guard management software."
        />
      </Helmet>
      <Navigation />
      {/* Header Section - Black Background */}
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl leading-tight font-bold text-white text-center mb-6">
            Security operations guides
          </h1>
          <p className="text-md tracking-wider leading-snug font-normal text-white text-center mb-12 md:w-3/4 mx-auto">
            Straightforward guides to help security companies modernize their
            operations and successfully adopt security management software
          </p>
        </div>
      </div>

      {/* Cards Section - White Background */}
      <div className="bg-white py-16 sm:px-4 lg:px-24 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...securityOperationsGuidesContent].reverse().map((guide) => (
              <GuideCard
                key={guide.id}
                title={guide.title}
                intro={guide.intro}
                image={guide.image}
                imageAlt={guide.imageAlt}
                link={`/resources/security-operations-guides/${guide.slug}`}
                readTime={guide.readTime}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuidesScreen;
