import Project from "./Project";
import "./Projects.css";
import { projects } from "../../../utils/projects";

export default function Projects() {
  return (
    <section id="Projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
