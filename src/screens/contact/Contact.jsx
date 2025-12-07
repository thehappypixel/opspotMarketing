import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
});

function ContactScreen() {
  const [isComplete, setIsComplete] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      await fetch("https://submit-form.com/ZuXEDAcfM", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsComplete(true);
      reset();
    } catch (error) {
      alert("There was an issue submitting your form. Please try again later.");
    }
  };

  const siteUrl = process.env.REACT_APP_DOMAIN || "https://opspot.com";
  
  return (
    <>
      <Helmet>
        <title>Contact Us - Opspot Security Guard Management Software</title>
        <meta 
          name="description" 
          content="Have questions about Opspot security guard management software? Need support or want to learn more? Contact our team today. We're here to help with your security operations needs." 
        />
        <meta 
          name="keywords" 
          content="contact Opspot, security software support, security guard software demo, security operations help, Opspot contact" 
        />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:title" content="Contact Us - Opspot Security Guard Management Software" />
        <meta property="og:description" content="Have questions about Opspot? Need support or want to learn more? Contact our team today." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content={`${siteUrl}/contact`} />
        <meta property="twitter:title" content="Contact Us - Opspot Security Guard Management Software" />
        <meta property="twitter:description" content="Have questions about Opspot? Need support or want to learn more? Contact our team today." />
      </Helmet>
      <Navigation />
      <div
        className={`mt-24 py-16 sm:px-4 lg:px-24 w-full bg-black flex flex-col ${
          isComplete ? "min-h-[75vh]" : ""
        }`}
      >
        <h1 className="text-xl leading-tight font-bold text-white text-center">
          Contact us
          <div className="flex justify-center">
            <p className="pt-6 mb-6 text-md tracking-wider leading-snug font-normal text-white text-center md:w-3/4 lg:w-1/2">
              If have questions, need support, or are interested in learning
              more, please don't hesitate to reach out.
            </p>
          </div>
        </h1>
        <div className="mt-6 bg-white lg:w-1/3 md:w-2/3 sm:w-full p-6 rounded-lg mx-auto">
          {isComplete ? (
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="bg-green-100 text-green-700 px-6 py-4 rounded-md w-full">
                <h2 className="text-md mb-2">Thank you for reaching out!</h2>
                <p className="text-xsm">
                  We've received your message and will get back to you shortly.
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/"
                  className="px-6 py-2 rounded-lg bg-brand-primary text-white text-sm font-medium hover:bg-brand-200 transition"
                >
                  Return Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xsm font-regular text-gray-700 mb-1"
                >
                  Your name:
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  autoComplete="off"
                  className="block w-full rounded-md border-0 pl-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary text-xsm leading-6"
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xsm font-regular text-gray-700 mb-1"
                >
                  Email address:
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  {...register("email")}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 pl-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary text-xsm leading-6"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xsm font-regular text-gray-700 mb-1"
                >
                  Message:
                </label>
                <textarea
                  placeholder="Your message"
                  {...register("message")}
                  className="block w-full rounded-md border-0 pl-2 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary text-xsm leading-6"
                  rows="6"
                />
                {errors.message && (
                  <p className="text-danger">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2 mt-4 rounded-lg text-sm font-medium text-white bg-brand-primary border-2 border-brand-primary hover:bg-brand-200 hover:border-brand-200 group block duration-150 ease-in-out cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className={isComplete ? "mt-auto" : ""}>
        <Footer />
      </div>
    </>
  );
}

export default ContactScreen;
