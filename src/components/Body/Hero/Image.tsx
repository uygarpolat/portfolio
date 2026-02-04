import { motion } from "framer-motion";

import upolat2 from "../../../assets/images/upolat2.jpg";
import "./Image.css";

export default function Image() {
  return (
    <div id="avatar">
      <div className="avatar-mask">
        <motion.img
          id="hero-image"
          src={upolat2}
          alt="Uygar Polat"
          initial={{ opacity: 0, y: "-15%", scale: 0.98 }}
          animate={{ opacity: 1, y: "10%", scale: 1 }}
          transition={{ type: "spring", duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <svg className="avatar-ring" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="49"
          fill="transparent"
          stroke="#00ffff"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1.01, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </svg>
    </div>
  );
}
