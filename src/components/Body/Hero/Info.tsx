import { motion } from "framer-motion";

import "./Info.css";

export default function Info() {
  const animationSettings = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div id="info">
      <motion.h2
        {...animationSettings}
        transition={{ type: "spring", duration: 2, delay: 0.1 }}
      >
        Hi there, my name is
      </motion.h2>
      <motion.h1
        {...animationSettings}
        transition={{ type: "spring", duration: 2, delay: 0.2 }}
      >
        Uygar.
      </motion.h1>
      <motion.p
        {...animationSettings}
        transition={{ type: "spring", duration: 2, delay: 0.3 }}
      >
        I'm a software engineer based in Helsinki!
      </motion.p>
    </div>
  );
}
