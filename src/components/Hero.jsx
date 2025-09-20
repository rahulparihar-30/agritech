import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CompostIcon from "@mui/icons-material/Compost";

const Hero = () => {
  const HeroCard = ({ Icon, title, description }) => {
    return (
      <div className="hero-content w-fit flex flex-col items-center gap-5 text-center p-4">
        <div className="hero-icon w-[150px] h-[150px] relative flex items-center justify-center">
          {/* Animated Small Leaf Circle SVG */}
          <svg viewBox="0 0 200 200" className="absolute top-0 left-0 w-full h-full animate-spin-slow">
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 360) / 12;
              return (
                <path
                  key={i}
                  d="M98 0 L102 0 L100 12 Z" // small leaf triangle
                  fill="#4CAF50"
                  transform={`rotate(${angle} 100 100) translate(0, 10)`}
                />
              );
            })}
          </svg>
          <Icon style={{ fontSize: 70, color: "#4CAF50", zIndex: 10 }} />
        </div>
        <div className="hero-text flex flex-col items-center">
          <h3 className="font-oswald font-bold text-[#2F855A]">{title}</h3>
          <p className="font-roboto text-gray-500 text-wrap">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="features"
      className="flex flex-col gap-10 justify-center items-center md:mx-30 py-20 bg-[#F0FFF4]"
    >
      <div className="text-center">
        <h2 className="font-oswald font-bold text-4xl text-[#2F855A]">
          Features
        </h2>
        <p className="text-[#2F855A] mt-2 font-roboto">
          What aspects of our service sets us apart!
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center">
        <HeroCard
          Icon={PersonIcon}
          title="Direct Farmer Sourcing"
          description="Fair prices for farmers, affordable produce for you."
        />
        <HeroCard
          Icon={LocalShippingIcon}
          title="Smart Delivery System"
          description="Timely doorstep delivery with live tracking."
        />
        <HeroCard
          Icon={EventAvailableIcon}
          title="Subscription Plans"
          description="Daily or weekly baskets tailored to your needs."
        />
        <HeroCard
          Icon={CompostIcon}
          title="Sustainable Practices"
          description="Eco-friendly packaging and farm sustainability."
        />
      </div>
    </section>
  );
};

export default Hero;
