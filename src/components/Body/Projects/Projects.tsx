import Project from "./Project";
import "./Projects.css";

import video1 from "../../../assets/videos/video1.mp4";
import video2 from "../../../assets/videos/video2.mp4";

const projects = [
  {
    title: "Wordle Clone",
    description:
      "A fully functional clone of the popular game Wordle, built with React and TypeScript. Features include local storage for stats, light/dark mode, and a polished UI that mimics the original game's feel.",
    videoSrc: video1,
    orientation: "vertical" as const,
    stack: [
      { name: "react", logoStyle: "original" },
      { name: "typescript", logoStyle: "plain" },
      { name: "css3", logoStyle: "plain" },
      { name: "vitejs", logoStyle: "plain" },
    ],
  },
  {
    title: "Language Learning Extension",
    description:
      "A browser extension designed to help users learn languages by displaying dual subtitles on streaming services. Solves a real-world problem for language learners in Finland.",
    videoSrc: video2,
    orientation: "horizontal" as const,
    reverseLayout: true,
    stack: [
      { name: "javascript", logoStyle: "plain" },
      { name: "html5", logoStyle: "plain" },
      { name: "css3", logoStyle: "plain" },
    ],
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
