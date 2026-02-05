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
        <defs>
          <linearGradient id="ringGradient" gradientTransform="rotate(0)">
            <stop offset="0%" stopColor="var(--gradient-col-1)" />
            <stop offset="50%" stopColor="var(--gradient-col-2)" />
            <stop offset="100%" stopColor="var(--gradient-col-1)" />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 0.5 0.5"
              to="360 0.5 0.5"
              dur="4s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <motion.circle
          cx="50"
          cy="50"
          r="49"
          fill="transparent"
          stroke="url(#ringGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1.01, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </svg>
    </div>
  );
}
