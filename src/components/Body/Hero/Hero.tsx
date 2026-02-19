import Image from "./Image";
import Info from "./Info";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="home-heading">
      <h2 id="home-heading" className="sr-only">
        Home
      </h2>
      <Image />
      <Info />
    </section>
  );
}
