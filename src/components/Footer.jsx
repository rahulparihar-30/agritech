import React from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-green-900 text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a to="/" className="w-11 h-11 cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            className="w-15 h-15 rounded"
            alt="Agritech Solutions"
          />
        </a>
          <p className="mt-3 text-gray-300">
            Empowering farmers with smart technology, data-driven solutions, and 
            sustainable practices for a greener tomorrow.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-green-300">About Us</a></li>
            <li><a href="#services" className="hover:text-green-300">Services</a></li>
            <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
            <li><a href="#careers" className="hover:text-green-300">Careers</a></li>
          </ul>
        </motion.div>

        {/* Contact + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p className="text-gray-300">📍 Pune, India</p>
          <p className="text-gray-300">📧 info@agritech.com</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-green-300"><Facebook size={22} /></a>
            <a href="#" className="hover:text-green-300"><Twitter size={22} /></a>
            <a href="#" className="hover:text-green-300"><Linkedin size={22} /></a>
            <a href="#" className="hover:text-green-300"><Instagram size={22} /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <motion.div
        className="border-t border-green-700 mt-10 pt-6 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        © {new Date().getFullYear()} AgriTech Solutions. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
