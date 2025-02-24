import { motion } from "framer-motion";
import "./WaveHand.css";

export default function Hand() {
  return (
    <div className="wave-container">
      <motion.svg
        className="wave-hand"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f4a261"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate: [0, 20, -10, 20, 0] }} // Effet "coucou"
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
      >
        <path d="M5 10c1.5-3 3-6 5-6s3 2 3 4-1 4-1 4" />
        <path d="M10 4c1.5-3 3-3 5-1s1 4 0 6-2 3-2 3" />
        <path d="M15 5c1.5-2 2.5-2 4-1s1 3 0 5-2 3-2 3" />
        <path d="M6 20c2 0 3-1 4-2s2-2 3-3" />
        <path d="M2 13c1.5 1 3 2 5 2s4-1 6-3 3-3 4-5" />
      </motion.svg>
    </div>
  );
}
