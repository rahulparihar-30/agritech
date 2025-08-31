import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  // All features (you can extend this list easily)
  const features = [
    {
      id: 1,
      title: "Harvesting",
      description:
        "Efficiently gather crops with our advanced harvesting technology. Designed to maximize yield while reducing labor costs.",
      image: "/farmer-8284236_1280.jpg",
    },
    {
      id: 2,
      title: "Smart Irrigation",
      description:
        "Automated irrigation systems that save water and ensure crops receive the right amount of hydration at the right time.",
      image: "/paddy-field-3864340_1280.jpg",
    },
    {
      id: 3,
      title: "Soil Monitoring",
      description:
        "Real-time soil data analysis using IoT sensors to optimize crop health and improve productivity sustainably.",
      image: "/landscape-5578727_1280.jpg",
    },
    {
      id: 4,
      title: "Crop Forecasting",
      description:
        "AI-powered forecasting tools that predict crop performance, helping farmers make data-driven decisions.",
      image: "/wheat-green.jpg",
    },
  ];

  return (
    <section className="md:mx-30 my-10 mx-5">
      <h2 className="font-oswald font-bold text-4xl text-center text-green-700 bg-clip-text">Why Agritech Solutions</h2>
      <p className="text-green-700 mt-6 text-center  font-roboto">
        Discover the innovative features that set us apart.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Feature 1 */}
        <div
          onClick={() => setActiveFeature(features[0])}
          className="relative cursor-pointer w-full h-full"
        >
          <img
            src={features[0].image}
            alt={features[0].title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="overlay absolute bottom-5 left-5 text-white">
            <h3 className="font-bold text-2xl">{features[0].title}</h3>
          </div>
        </div>

        {/* Feature 2 + 3 stacked */}
        <div className="flex flex-col gap-4 h-full">
          <div
            onClick={() => setActiveFeature(features[1])}
            className="relative cursor-pointer h-50"
          >
            <img
              src={features[1].image}
              alt={features[1].title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="overlay absolute bottom-3 left-3 text-white">
              <h3 className="font-bold text-xl">{features[1].title}</h3>
            </div>
          </div>

          <div
            onClick={() => setActiveFeature(features[2])}
            className="relative cursor-pointer h-50"
          >
            <img
              src={features[2].image}
              alt={features[2].title}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="overlay absolute bottom-3 left-3 text-white">
              <h3 className="font-bold text-xl">{features[2].title}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 4 Full Width */}
      <div
        onClick={() => setActiveFeature(features[3])}
        className="relative cursor-pointer mt-5 w-full h-40"
      >
        <img
          src={features[3].image}
          alt={features[3].title}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="overlay absolute bottom-3 left-3 text-white">
          <h3 className="font-bold text-xl">{features[3].title}</h3>
        </div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activeFeature && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Background Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-lg"
              onClick={() => setActiveFeature(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-2xl p-6 w-[90%] md:w-[500px] z-10"
            >
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-60 object-cover rounded-lg"
              />
              <h3 className="font-oswald text-green-700 font-bold text-lg mt-4">
                {activeFeature.title}
              </h3>
              <p className="font-roboto text-gray-700 mt-2">
                {activeFeature.description}
              </p>

              <button
                onClick={() => setActiveFeature(null)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Features;
