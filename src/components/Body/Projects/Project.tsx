import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import DevIcons from "../Skills/DevIcons";
import ImageSlider from "./ImageSlider";
import "./Project.css";

interface ProjectProps {
  title: string;
  description: string;
  mediaSrc: string;
  mediaSrc2?: string; // Optional second image for slider
  mediaType: "video" | "image" | "slider";
  stack: { name: string; logoStyle: string }[];
  github?: string;
  deploy?: string;
}

export default function Project({
  title,
  description,
  mediaSrc,
  mediaSrc2,
  mediaType,
  stack,
  github,
  deploy,
}: ProjectProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.6 });

  useEffect(() => {
    if (mediaType === "video" && videoRef.current) {
      if (isInView) {
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, mediaType]);

  return (
    <motion.div
      ref={containerRef}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="media-container">
        {mediaType === "video" ? (
          <video
            ref={videoRef}
            src={mediaSrc}
            muted
            loop
            playsInline
            controls={false}
            preload="none"
          />
        ) : mediaType === "slider" && mediaSrc2 ? (
          <ImageSlider
            beforeImage={mediaSrc}
            afterImage={mediaSrc2}
            alt={title}
          />
        ) : (
          <img src={mediaSrc} alt={title} loading="lazy" />
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-stack">
          <DevIcons icons={stack} />
        </div>

        {(github || deploy) && (
          <div className="project-links">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn github"
              >
                <i className="devicon-github-original"></i> GitHub
              </a>
            )}
            {deploy && (
              <a
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn deploy"
              >
                <i className="devicon-chrome-plain"></i> Website
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
