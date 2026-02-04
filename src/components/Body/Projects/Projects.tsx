import Project from "./Project";
import "./Projects.css";
import { projects } from "../../../utils/projects";

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
