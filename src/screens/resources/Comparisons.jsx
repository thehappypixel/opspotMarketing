import React from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import GuideCard from "../../components/guideCard";
import comparisonsContent from "../../content/comparisonsContent";

function ComparisonsScreen() {
  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";

  return (
    <>
      <Helmet>
        <title>
          Comparisons - Opspot Security Guard Management Software
        </title>
        <meta
          name="description"
          content="Side-by-side comparisons to help security teams choose the right guard management software."
        />
        <meta
          name="keywords"
          content="security guard software comparisons, Opspot comparisons, guard management platform comparison"
        />
        <link rel="canonical" href={`${siteUrl}/ressources/comparisons`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/ressources/comparisons`} />
        <meta
          property="og:title"
          content="Comparisons - Opspot Security Guard Management Software"
        />
        <meta
          property="og:description"
          content="Side-by-side comparisons to help security teams choose the right guard management software."
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:url"
          content={`${siteUrl}/ressources/comparisons`}
        />
        <meta
          property="twitter:title"
          content="Comparisons - Opspot Security Guard Management Software"
        />
        <meta
          property="twitter:description"
          content="Side-by-side comparisons to help security teams choose the right guard management software."
        />
      </Helmet>
      <Navigation />
      {/* Header Section - Black Background */}
      <div className="mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl leading-tight font-bold text-white text-center mb-6">
            Comparisons
          </h1>
          <p className="text-md tracking-wider leading-snug font-normal text-white text-center mb-12 md:w-3/4 mx-auto">
            Straightforward comparisons to help security teams choose the right
            guard management software for their operations
          </p>
        </div>
      </div>

      {/* Cards Section - White Background */}
      <div className="bg-white py-16 sm:px-4 lg:px-24 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Comparisons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...comparisonsContent].reverse().map((comparison) => (
              <GuideCard
                key={comparison.id}
                title={comparison.title}
                intro={comparison.intro}
                image={comparison.image}
                imageAlt={comparison.imageAlt}
                link={`/ressources/comparisons/${comparison.slug}`}
                readTime={comparison.readTime}
                buttonText="Read comparison"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ComparisonsScreen;
