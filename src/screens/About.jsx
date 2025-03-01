import React from "react";
import Navigation from "../components/navigation";

function AboutScreen() {
  return (
    <>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About</h1>
        {/* Insert your contact form or information here */}
        <p>About information coming soon.</p>
      </div>
    </>
  );
}

export default AboutScreen;
