import { motion } from "motion/react";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      {/* <h2 className="section-title">About Me</h2> */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          I have a Bachelor's degree in <strong>Mathematics</strong>. I love
          tinkering, be it with my good old reliable{" "}
          <strong>Ender 3 3D printer</strong>, my <strong>Arduino</strong>{" "}
          projects, or with <strong>web development</strong>. I try to keep up
          with modern stacks in order to build cutting edge and reliable
          applications.
        </p>
        <p>
          I've always had a soft spot for coding ever since I've turned a
          non-smart air conditioner into a smart one. The highly structured and
          often predictable nature of coding mirrored my affinity to
          mathematics. So after years of mostly coding for hobby projects, I
          decided to take it up a notch and enrolled in{" "}
          <a
            href="https://www.hive.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hive Helsinki
          </a>
          , a collaborative, peer-driven programming school with a unique
          pedagogy developed by{" "}
          <a
            href="https://www.42network.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            42 School
          </a>
          .
        </p>
        <p>
          After graduating recently, I'm now looking for employment
          opportunities as a software developer. In this humble portfolio, you
          can find some of the stuff I've been cooking over the years.
        </p>
      </motion.div>
    </div>
  );
}
