import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

import "./Socials.css";

const socialsData = [
  {
    icon: FaGithub,
    href: "https://github.com/uygarpolat",
    color: "#6e57ff",
    delay: 0.4,
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/uygarpolat",
    color: "#0077b5",
    delay: 0.5,
  },
];

export default function Socials() {
  const animationSettings = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div id="socials">
      {socialsData.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          {...animationSettings}
          transition={
            isLoaded
              ? { duration: 0.2 }
              : { type: "spring", duration: 2, delay: social.delay }
          }
          whileHover={{
            scale: 1.1,
            color: social.color,
            transition: { delay: 0, duration: 0.2 },
          }}
          onAnimationComplete={() => setIsLoaded(true)}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
}
