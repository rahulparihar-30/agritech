import React from "react";

const About = () => {
  return (
    <section id="about" className="relative md:mx-20 my-16 px-6 p-6" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-green-700">
            About <span className="text-secondary">Us</span>
          </h2>
          <p className="text-gray-700 font-roboto text-base md:text-lg leading-relaxed">
            At <span className="font-bold text-green-700">M Global Agritech</span>, 
            we combine the power of technology with agriculture to create 
            smarter, more sustainable solutions for farmers and businesses.  
            From precision farming to supply chain innovations, our mission is to 
            maximize yields, reduce costs, and promote a greener future.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={`${import.meta.env.BASE_URL}rice-6739554_1280.jpg`}
            alt="About Agritech"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
