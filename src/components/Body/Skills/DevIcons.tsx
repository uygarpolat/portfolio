import { motion } from "motion/react";
import "./DevIcons.css";

interface DevIconsProps {
  icons: {
    name: string;
    logoStyle: string;
  }[];
}

export default function DevIcons({ icons }: DevIconsProps) {
  return (
    <div className="dev-icons-container">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="icon-container"
          title={icon.name}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: index * 0.1, duration: 0.5 },
          }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.2 }}
        >
          <i className={`devicon-${icon.name}-${icon.logoStyle} colored`}></i>
        </motion.div>
      ))}
    </div>
  );
}
