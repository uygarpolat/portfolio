import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import SectionSeparator from "./SectionSeparator/SectionSeparator";

export default function Body() {
  return (
    <>
      <Hero />
      <SectionSeparator label="About" />
      <About />
      <SectionSeparator label="Skills" />
      <Skills />
      <SectionSeparator label="Projects" />
      <Projects />
      <SectionSeparator label="Contact" />
      <Contact />
    </>
  );
}
