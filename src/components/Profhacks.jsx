import { useState } from "react";
import profhacks24 from "../assets/profhacks.jpg";
import profhacks25 from "../assets/photos/ph24/logo/phack2025_logo1.jpg";

import { motion } from "framer-motion";

const Profhacks = () => {
  // State to control form visibility
  const [showForm, setShowForm] = useState(false);

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section className="container mx-auto my-8" id="profhacks">
      {/* Title */}
      <h2 className="mb-8 text-center text-5xl tracking-tighter lg:text-6xl pt-14">
        ProfHacks 2025, Casino Royale - Coming Soon!
      </h2>

      <div className="flex flex-wrap">
        <motion.div
          className="w-full px-4 lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl tracking-tighter lg:text-4xl">
            The Highroller's Hackathon
          </h2>

          <div className="mb-8 mt-1 h-1 w-56 bg-emerald-500 lg:-rotate-1"></div>

          <p className="m-8 text-xl leading-relaxed tracking-tight lg:max-w-xl whitespace-pre-wrap">
            Get ready for ProfHacks 2025! Registration is below and more information will be coming soon. Stay tuned for updates on our Instagram!
          </p>
        </motion.div>

        <div className="w-full p-10 lg:w-1/2">
          <img
            src={profhacks25}
            className="rounded-3xl lg:-rotate-3 shadow-lg shadow-slate-400"
          />
        </div>
      </div>

      {/* Register Button */}
      <div className="mt-8 text-center">
        <button
          onClick={toggleForm}
          className="px-6 py-3 bg-emerald-500 text-white text-lg rounded-lg shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          {showForm ? "Hide Registration Form" : "Register for ProfHacks 2025"}
        </button>
      </div>

      {/* Conditionally Render the Form */}
      {showForm && (
        <div className="mt-12">
          <h3 className="text-center text-2xl font-bold my-4">
            Sign Up for ProfHacks 2025 Today!
          </h3>
          <p className="text-center text-lg mb-4">
            Secure your spot for this exciting event by filling out the form below:
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdxZ_OQAaXzoo__Ij3DHmA7Ozn1IuDPNuXzds7Cg0acnNmdjA/viewform?embedded=true"
            width="100%"
            height="1500"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="border-2 border-emerald-500 rounded-lg shadow-lg"
          >
            Loading…
          </iframe>
          <p className="text-center mt-4">
            If the form doesn’t load,{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxZ_OQAaXzoo__Ij3DHmA7Ozn1IuDPNuXzds7Cg0acnNmdjA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 underline"
            >
              click here
            </a>{" "}
            to register.
          </p>
        </div>
      )}
    </section>
  );
};

export default Profhacks;
