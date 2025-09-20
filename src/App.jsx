import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Home from "./components/Home";
import Testimonial from "./components/Testimonial";
import { motion } from "framer-motion";

// 1. IMPORTANT: Import from the trial package to use bonus plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <-- Import ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother"; // <-- Import ScrollSmoother
import { useGSAP } from "@gsap/react";
import ChatWidget from "./components/ChatWidget";

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// 2. Register BOTH plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  // 3. Create refs for the wrapper and content elements
  const main = useRef(null);
  const content = useRef(null);

  useGSAP(
    () => {
      // 4. Create the ScrollSmoother instance
      ScrollSmoother.create({
        wrapper: main.current, // The viewport element
        content: content.current, // The scrollable content
        smooth: 1.5, // How long it takes to "catch up" to the native scroll position
        effects: true, // Enables parallax effects like data-speed
      });
    },
    { scope: main } // Scoping ensures this GSAP code is cleaned up when the component unmounts
  );

  return (
    <>
      <Navbar />

      {/* 5. Apply the required HTML structure for ScrollSmoother */}
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content" ref={content}>
          <Home />

          {/* The rest of your components remain the same. */}
          {/* The data-speed attributes will now create a parallax effect */}
          {/* because we set `effects: true` in ScrollSmoother.create() */}

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1" // Slower elements have higher numbers (closer to 1)
            className="section-container"
          >
            <Hero />
          </motion.div>

          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Features />
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1" // No parallax effect
            className="section-container"
          >
            <About />
          </motion.div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1"
            className="section-container"
          >
            <Testimonial />
          </motion.div>
          <div className="section-container w-full h-full"  data-speed="1">
            <img src={import.meta.env.BASE_URL + "paddy.png"} alt="divider" className="w-full h-full object-cover object-top" />
          </div>
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            data-speed="1" // Faster elements have lower numbers
            className="section-container"
          >
            <Footer />
          </motion.div>
        </div>
        <ChatWidget/>
      </div>
    </>
  );
};

export default App;
