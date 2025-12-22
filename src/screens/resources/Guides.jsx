import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import GuideCard from "../../components/guideCard";
import opspotSecuritySoftware from "../../assets/images/opspot-security-guard-software.png";

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
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl leading-tight font-bold text-white text-center mb-6">
            Security Operations Guides
          </h1>
          <p className="text-md tracking-wider leading-snug font-normal text-white text-center mb-12">
            Comprehensive guides on security operations and guard management to
            help you improve your security operations.
          </p>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GuideCard
              title="What to consider when adopting security guard management software"
              intro="Running a security operation is demanding. Between managing guards, meeting client expectations, and ensuring incidents are handled properly, there's little room for error or wasted time. This article walks through the key things to consider before making that shift, so you can move forward with confidence, without disrupting your operations."
              image={opspotSecuritySoftware}
              imageAlt="What to consider when adopting security guard management software"
              link="/resources/security-operations-guides/what-to-consider-when-adopting-security-guard-management-software"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GuidesScreen;
