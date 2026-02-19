import Stack from "./Stack.tsx";
import Certificates from "./Certificates.tsx";

export default function Skills() {
  return (
    <section id="Skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="sr-only">
        Skills
      </h2>
      <Stack />
      <Certificates />
    </section>
  );
}
