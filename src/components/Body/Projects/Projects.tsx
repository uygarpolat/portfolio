import Project from "./Project";
import "./Projects.css";

// Assets
import video1 from "../../../assets/videos/video1.mp4";
import video2 from "../../../assets/videos/video2.mp4";
import mockImage from "../../../assets/certificates/UC-0dd445c1-085f-436d-a2d0-8b6a090c372d.jpg";

const projects = [
  {
    title: "Wordle Clone",
    description:
      "A fully functional clone of the popular game Wordle, built with React and TypeScript. Features include local storage for stats, light/dark mode, and a polished UI.",
    mediaSrc: video1,
    mediaType: "video" as const,
    github: "https://github.com/uygarpolat/wordle-clone", // Mock link
    deploy: "https://wordle-clone-demo.vercel.app", // Mock link
    stack: [
      { name: "react", logoStyle: "original" },
      { name: "typescript", logoStyle: "plain" },
      { name: "css3", logoStyle: "plain" },
      { name: "vitejs", logoStyle: "plain" },
    ],
  },
  {
    title: "Language Extension",
    description:
      "A browser extension helping users learn languages by displaying dual subtitles on streaming services. Solves a real-world problem for learners in Finland.",
    mediaSrc: video2,
    mediaType: "video" as const,
    github: "https://github.com/uygarpolat/language-extension",
    stack: [
      { name: "javascript", logoStyle: "plain" },
      { name: "html5", logoStyle: "plain" },
      { name: "css3", logoStyle: "plain" },
    ],
  },
  {
    title: "Mock Project",
    description:
      "A demonstration of how this portfolio handles static image projects. This could be a design portfolio, a backend service, or any other non-video project.",
    mediaSrc: mockImage,
    mediaType: "image" as const,
    deploy: "https://example.com",
    stack: [
      { name: "python", logoStyle: "plain" },
      { name: "django", logoStyle: "plain" },
      { name: "postgresql", logoStyle: "plain" },
    ],
  },
];

export default function Projects() {
  return (
    <div id="Projects">
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
