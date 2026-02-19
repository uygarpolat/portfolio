import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";
import "./SectionSeparator.css";

interface SectionSeparatorProps {
  label: string;
}

export default function SectionSeparator({ label }: SectionSeparatorProps) {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        left: "0%",
        x: "0%",
        y: "-50%",
        transition: { duration: 2, ease: "easeInOut" },
      });
      controls.start({
        left: ["0%", "100%", "0%"],
        x: ["0%", "-100%", "0%"],
        y: "-50%",
        transition: {
          duration: 8, // Scroll speed
          ease: "easeInOut",
          repeat: Infinity,
        },
      });
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      className="section-separator"
      aria-hidden="true"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="separator-line" />
      <motion.div
        className="sliding-box"
        initial={{ left: "50%", x: "-50%", y: "-50%" }}
        animate={controls}
      >
        <span className="box-text">&lt;{label} /&gt;</span>
      </motion.div>
    </motion.div>
  );
}
