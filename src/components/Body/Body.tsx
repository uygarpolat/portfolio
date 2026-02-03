import Hero from "./Hero/Hero";
import About from "./About/About";
import SectionSeparator from "./SectionSeparator/SectionSeparator";

export default function Body() {
  return (
    <>
      <Hero />
      <SectionSeparator label="About" />
      <About />
      <SectionSeparator label="Skills" />
      <SectionSeparator label="Projects" />
      <SectionSeparator label="Contact" />
    </>
  );
}
