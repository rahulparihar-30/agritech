import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp className="text-white text-xl" />,
      bg: "bg-green-500",
      link: "https://wa.me/919876543210", // Replace with your WhatsApp number
    },
    {
      id: "email",
      icon: <FaEnvelope className="text-white text-xl" />,
      bg: "bg-black",
      link: "mailto:example@gmail.com", // Replace with your email
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 flex flex-col z-100 items-center space-y-3">
      <AnimatePresence>
        {open &&
          buttons.map((btn, index) => (
            <motion.a
              key={btn.id}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-lg ${btn.bg}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              {btn.icon}
            </motion.a>
          ))}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-700 text-white shadow-lg"
      >
        {open ? <FaChevronDown /> : <IoChatbubbleOutline fontSize={30} />}
      </button>
    </div>
  );
}
