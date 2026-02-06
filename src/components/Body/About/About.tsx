import { motion } from "motion/react";
import "./About.css";

export default function About() {
  return (
    <section id="About" aria-label="About Me">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I’m a tinkerer at heart, be it with my good old reliable{" "}
          <strong>Ender 3 Pro 3D printer</strong>, through{" "}
          <strong>Arduino</strong> projects, recreating C functions in Assembly,
          or <strong>web development</strong>. Backed by a Bachelor's degree in{" "}
          <strong>Mathematics</strong>, I try to keep up with modern stacks to
          build cutting-edge and reliable applications.
        </p>
        <p>
          I've always had a soft spot for coding ever since I turned a non-smart
          air conditioner into a smart one. The highly structured and often
          predictable nature of coding mirrored my affinity for mathematics.
          After years of coding mostly for hobby projects, I decided to take it
          up a notch and enrolled in{" "}
          <a
            href="https://www.hive.fi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hive Helsinki (opens in a new tab)"
          >
            Hive Helsinki
          </a>
          , a collaborative, peer-driven programming school with a unique
          pedagogy developed by{" "}
          <a
            href="https://www.42network.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="42 School (opens in a new tab)"
          >
            42 School
          </a>
          .
        </p>
        <p>
          Having recently graduated, I'm now looking for employment
          opportunities as a software developer. In this humble portfolio, you
          can find some of the stuff I've been cooking over the years.
        </p>
      </motion.div>
    </section>
  );
}
