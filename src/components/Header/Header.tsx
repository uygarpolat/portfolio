import { useState } from "react";
import { motion } from "motion/react";

import Brand from "./Brand";
import Navbar from "./Navbar";
import Actions from "./Actions";
import Sandwich from "./Sandwich.tsx";
import Modal from "./Modal.tsx";
import "./Header.css";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const springTransition = { type: "spring", duration: 2 } as const;

  return (
    <header>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={springTransition}
      >
        <Brand />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={springTransition}
      >
        <Navbar />
      </motion.div>

      <motion.div
        id="actions-and-sandwich"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={springTransition}
      >
        <Actions theme={theme} toggleTheme={toggleTheme} />
        <Sandwich onClick={() => setIsMenuOpen((prev) => !prev)} />
      </motion.div>

      {isMenuOpen && <Modal onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
