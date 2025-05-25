import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "./ChatBot";

export default function ChatBotToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <motion.button
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.15, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Toggle Chatbot"
  className="fixed bottom-6 right-6 z-50 bg-purple-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-purple-800 focus:outline-none
    sm:w-12 sm:h-12 sm:text-sm"
>
  💬
</motion.button>


      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  className="
    fixed bottom-20 right-6 z-50 
    w-full max-w-md md:max-w-lg 
    bg-gradient-to-b from-purple-100 via-white to-purple-200 
    rounded-3xl shadow-lg border border-purple-900 p-4 
    overflow-auto max-h-[70vh]
  "
>
  <ChatBot />
</motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
