import { motion } from "motion/react";
import "./Certificates.css";

const images = import.meta.glob<{ default: string }>(
  "../../../assets/certificates/*.webp",
  {
    eager: true,
  }
);

const certificates = Object.entries(images).map(([path, module]) => {
  const fileName = path.split("/").pop()?.split(".")[0] || "Certificate";
  return {
    src: module.default,
    title: fileName,
  };
});

export default function Certificates() {
  return (
    <div id="certificates">
      <h3 id="section-title-cert">Certifications</h3>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.5, filter: "brightness(1.2)", zIndex: 10 }}
          >
            <img src={cert.src} alt={cert.title} loading="lazy" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
