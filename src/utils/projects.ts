import wordle from "../assets/videos/wordle.webm";
import mouseTracker from "../assets/videos/mousetracker.mp4";
import todo from "../assets/videos/todo.webm";
import minishellImg from "../assets/images/minishell-minishell.webp";
import bashImg from "../assets/images/minishell-bash.webp";
import pong from "../assets/videos/pong.webm";
import portfolio from "../assets/videos/portfolio.webm";

export const projects = [
  {
    title: "Portfolio",
    description:
      "My personal portfolio website, the one you are looking at right now! Built with React, TypeScript, Vite, and Vanilla CSS.",
    mediaSrc: portfolio,
    mediaType: "video" as const,
    github: "https://github.com/uygarpolat/portfolio",
    deploy: "https://uygarpolat.com/",
    stack: [
      { name: "typescript", logoStyle: "plain" },
      { name: "react", logoStyle: "original-wordmark" },
      { name: "html5", logoStyle: "plain-wordmark" },
      { name: "css3", logoStyle: "plain-wordmark" },
      { name: "vitejs", logoStyle: "plain" },
      { name: "vercel", logoStyle: "original-wordmark" },
      { name: "framermotion", logoStyle: "original-wordmark" },
    ],
  },
  {
    title: "Wordle Clone",
    description:
      "A fully functional clone of the popular game Wordle, built with React and TypeScript. Features include different language support, time mode, light/dark themes, stats and sharing game results.",
    mediaSrc: wordle,
    mediaType: "video" as const,
    github: "https://github.com/uygarpolat/wordle",
    deploy: "https://wordle-ten-sable.vercel.app/",
    stack: [
      { name: "typescript", logoStyle: "plain" },
      { name: "react", logoStyle: "original-wordmark" },
      { name: "html5", logoStyle: "plain-wordmark" },
      { name: "css3", logoStyle: "plain-wordmark" },
      { name: "vitejs", logoStyle: "plain" },
      { name: "vercel", logoStyle: "original-wordmark" },
    ],
  },
  {
    title: "Full Stack Pong",
    description:
      "A real-time multiplayer Pong game built with NestJS, React, and WebSockets. Features include user authentication (OAuth), friend system, match history, live chat and tournaments. A robust full-stack application developed as a group final project at Hive Helsinki.",
    mediaSrc: pong,
    mediaType: "video" as const,
    github: "https://github.com/uygarpolat/full-stack-pong",
    stack: [
      { name: "nestjs", logoStyle: "plain" },
      { name: "react", logoStyle: "original-wordmark" },
      { name: "typescript", logoStyle: "plain" },
      { name: "postgresql", logoStyle: "plain-wordmark" },
      { name: "docker", logoStyle: "plain-wordmark" },
    ],
  },
  {
    title: "ToDo App",
    description:
      "A simple ToDo app to practice FastAPI and PostgreSQL. Includes user authentication and lots of CRUD operations. Deployed to Vercel and used Neon for database.",
    mediaSrc: todo,
    mediaType: "video" as const,
    github: "https://github.com/uygarpolat/simple-todo-app",
    deploy: "https://simple-todo-app-nu-seven.vercel.app/",
    stack: [
      { name: "python", logoStyle: "plain" },
      { name: "fastapi", logoStyle: "original-wordmark" },
      { name: "postgresql", logoStyle: "plain-wordmark" },
      { name: "sqlalchemy", logoStyle: "plain-wordmark" },
      { name: "pytest", logoStyle: "plain-wordmark" },
      { name: "javascript", logoStyle: "plain" },
      { name: "vercel", logoStyle: "original-wordmark" },
    ],
  },
  {
    title: "Moustracker animation",
    description:
      "Inspired by a component in Framer Motion, this practice animation tracks the mouse position and makes each line point to it while highlighting nearby lines.",
    mediaSrc: mouseTracker,
    mediaType: "video" as const,
    stack: [
      { name: "javascript", logoStyle: "plain" },
      { name: "react", logoStyle: "original-wordmark" },
      { name: "html5", logoStyle: "plain-wordmark" },
      { name: "css3", logoStyle: "plain-wordmark" },
      { name: "vitejs", logoStyle: "plain" },
    ],
  },
  {
    title: "Minishell",
    description:
      "As a part of the 42 curriculum, we built a shell that mimics bash behavior. It handles pipes, redirections, signals and so much more... Slide the slider on the image to compare with Bash!",
    mediaSrc: bashImg,
    mediaSrc2: minishellImg,
    mediaType: "slider" as const,
    github: "https://github.com/uygarpolat/minishell",
    stack: [
      { name: "c", logoStyle: "original" },
      { name: "bash", logoStyle: "plain" },
      { name: "linux", logoStyle: "plain" },
    ],
  },
];
