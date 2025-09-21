import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Home = () => {
    return (
        <div className="Home relative w-full h-screen" id="home">
            {/* Video Background */}
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={"farming.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for readability */}
            <div className="overlay-layer w-full h-full bg-black absolute top-0 opacity-40"></div>

            {/* Content */}
            <div className="home-overlay lg:w-[40%] w-[80%] p-5 mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h3 className="font-normal">
                    <span className="bg-green-700 p-1 mr-1">#1</span>Agritech Solutions for Modern Farming
                </h3>
                <h1 className="text-6xl font-oswald lg:text-7xl font-bold">
                    Growing <span className="text-green-700">Farms</span> Smarter
                </h1>
                <p className="my-4">
                    We empower farmers with cutting-edge technology, sustainable practices, and expert solutions to increase yield and efficiency. Transforming agriculture, one farm at a time.
                </p>
                <div className="btns md:justify-start">
                    <button 
                        id="whatsapp"
                        className="bg-green-700 transition border-green-700 delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 shadow-white flex items-center gap-2 px-4 py-2 rounded"
                    >
                        <WhatsAppIcon /> Chat Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
