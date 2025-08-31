import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CompostIcon from "@mui/icons-material/Compost";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col mt-5 gap-5 justify-center items-center md:mx-30"
    >
      <div>
        <h2 className="font-oswald font-bold text-4xl text-center text-green-700 bg-clip-text">
        Features
      </h2>
      <p className="text-green-700 mt-2 text-center  font-roboto">
        What aspects of our service sets us apart!
      </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:mx-30" >
        <div className="hero-content w-fit flex flex-col items-center gap-5 text-center p-4">
        <div className="hero-icon w-[150px] h-[150px] border-3 border-secondary rounded-full flex items-center justify-center">
          <PersonIcon style={{ fontSize: 100, color: "#4CAF50" }} />
        </div>
        <div className="hero-text flex flex-col items-center">
          <h3 className="font-oswald font-bold text-green-700">
            Direct Farmer Sourcing
          </h3>
          <p className="font-roboto text-gray text-wrap">
            Fair prices for farmers, affordable produce for you.
          </p>
        </div>
      </div>
      <div className="hero-content w-fit flex flex-col items-center gap-5 text-center p-4">
        <div className="hero-icon w-[150px] h-[150px] border-3 border-secondary rounded-full flex items-center justify-center">
          <LocalShippingIcon style={{ fontSize: 100, color: "#4CAF50" }} />
        </div>
        <div className="hero-text flex flex-col items-center">
          <h3 className="font-oswald font-bold text-green-700">
            Smart Delivery System
          </h3>
          <p className="font-roboto text-gray text-wrap">
            Timely doorstep delivery with live tracking.
          </p>
        </div>
      </div>
      <div className="hero-content w-fit flex flex-col items-center gap-5 text-center p-4">
        <div className="hero-icon w-[150px] h-[150px] border-3 border-secondary rounded-full flex items-center justify-center">
          <EventAvailableIcon style={{ fontSize: 100, color: "#4CAF50" }} />
        </div>
        <div className="hero-text flex flex-col items-center">
          <h3 className="font-oswald font-bold text-green-700">
            Subscription Plans
          </h3>
          <p className="font-roboto text-gray text-wrap">
            Daily or weekly baskets tailored to your needs.
          </p>
        </div>
      </div>
      <div className="hero-content w-fit flex flex-col items-center gap-5 text-center p-4">
        <div className="hero-icon w-[150px] h-[150px] border-3 border-secondary rounded-full flex items-center justify-center">
          <CompostIcon style={{ fontSize: 100, color: "#4CAF50" }} />
        </div>
        <div className="hero-text flex flex-col items-center">
          <h3 className="font-oswald font-bold text-green-700">
            Sustainable Practices
          </h3>
          <p className="font-roboto text-gray text-wrap">
            Eco-friendly packaging and farm sustainability.
          </p>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;
