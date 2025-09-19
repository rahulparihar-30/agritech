import React from "react";
import { comments } from "./data";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  const card = (testimonial, index) => {
    return (
      <div
        key={index}
        className="testimonial-card bg-[#E6FFFA] text-blue-900 text-justify shadow-xl shadow-gray-300 
        w-[250px] sm:w-[280px] md:w-[300px] 
        min-w-[250px] sm:min-w-[280px] md:min-w-[300px]
        max-w-[300px]
        border-green-700 border-2 rounded flex flex-col space-y-4 mt-5 p-3 sm:p-4 
        flex-shrink-0 filter grayscale hover:grayscale-0 transition-all duration-500"
      >
        <FormatQuoteIcon fontSize="large" className="text-green-700 font-bold" />
        <p className="break-words text-sm sm:text-base">{testimonial.comment}</p>
        <div className="credits flex gap-4 items-center">
          <img
            src={testimonial.pic}
            className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full object-cover"
            alt="profile"
            loading="lazy"
          />
          <div className="flex flex-col text-left">
            <span className="text-green-700 text-lg sm:text-xl font-bold">{testimonial.name}</span>
            <span className="text-[11px] sm:text-[12px]">{testimonial.location}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="mx-4 sm:mx-8 md:mx-20 text-center place-items-center space-y-4 sm:space-y-5 mb-10"
    >
      <h3 className="text-green-700 text-2xl sm:text-3xl md:text-4xl font-bold font-oswald">
        Testimonials
      </h3>
      <h1 className="tagline text-green-700 text-sm sm:text-base md:text-lg font-oswald">
        Stories of Trust, Success, and Partnership.
      </h1>

      <div
        className="overflow-hidden relative w-full h-full group"
        id="testimonial"
      >
        {/* Right scroll */}
        <div className="flex gap-4 sm:gap-6 flex-nowrap animate-right group-hover:pause-animation" id="left">
          {[...comments, ...comments].map((comment, i) => card(comment, i))}
        </div>

        {/* Left scroll */}
        <div className="flex gap-4 sm:gap-6 flex-nowrap mt-4 sm:mt-6 animate-left group-hover:pause-animation" id="right">
          {[...comments, ...comments].map((comment, i) => card(comment, i))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
