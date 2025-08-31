import React from "react";
import { comments } from "./data";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  const card = (testimonial, index) => {
    return (
      <div
        key={index}
        className="bg-white text-blue-900 text-justify shadow-xl shadow-gray-300 
        w-[300px] min-w-[300px] max-w-[300px] 
        border-green-700 border-2 rounded flex flex-col space-y-5 mt-5 p-4 
        flex-shrink-0"
      >
        <FormatQuoteIcon fontSize="large" className="text-green-700 font-bold" />
        <p className="break-words">{testimonial.comment}</p>
        <div className="credits flex gap-5">
          <img
            src={testimonial.pic}
            className="w-[50px] h-[50px] rounded-full"
            alt="profile"
            loading="lazy"
          />
          <div className="flex flex-col text-left">
            <span className="text-green-700 text-xl font-bold">
              {testimonial.name}
            </span>
            <span className="text-[12px]">{testimonial.location}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="md:mx-30  text-center place-items-center space-y-5 mb-10">
      <h3
        className="text-green-700 text-4xl font-bold font-oswald"
      >
        Testimonials
      </h3>
      <h1
        className="tagline text-green-700 text-lg font-oswald"
      >
        Stories of Trust, Success, and Partnership.
      </h1>

      {/* Scrolling container */}
      <div className="overflow-hidden relative w-full h-full" id="test-carousel">
        {/* Right scroll */}
        <div className="flex gap-6 flex-nowrap " id="left">
          {[...comments, ...comments].map((comment, i) => card(comment, i))}
        </div>

        {/* Left scroll */}
        <div className="flex gap-6 flex-nowrap mt-6" id="right">
          {[...comments, ...comments].map((comment, i) => card(comment, i))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
