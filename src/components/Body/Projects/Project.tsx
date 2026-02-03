import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import DevIcons from "../Skills/DevIcons";
import "./Project.css";

interface ProjectProps {
  title: string;
  description: string;
  videoSrc: string;
  stack: { name: string; logoStyle: string }[];
  orientation?: "horizontal" | "vertical";
  reverseLayout?: boolean;
}

export default function Project({
  title,
  description,
  videoSrc,
  stack,
  orientation = "horizontal",
  reverseLayout = false,
}: ProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.6 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      className={`project-card ${reverseLayout ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className={`video-wrapper ${orientation}`}>
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          controls={false}
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-stack">
          <h4>Technologies</h4>
          <DevIcons icons={stack} />
        </div>
      </div>
    </motion.div>
  );
}
