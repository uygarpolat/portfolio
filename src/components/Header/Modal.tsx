import { motion } from "motion/react";
import "./Modal.css";

interface ModalProps {
  onClose: () => void;
}

const navItems = ["home", "projects", "about", "contact"];

export default function Modal({ onClose }: ModalProps) {
  return (
    <motion.div
      id="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="modal-nav">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index + 0.2 }}
            >
              <a href={`#${item}`} onClick={onClose}>
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
