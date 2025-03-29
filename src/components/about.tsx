"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", {
    amount: 0.75,
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Greetings! 🌟 I am a{" "}
        <span className="font-medium">Software engineer</span> with over 2 years
        of <span className="font-medium">MERN stack</span> experience. I
        specialize in{" "}
        <span className="italic">
          JavaScript, TypeScript, Angular, React, NextJS, Tailwind CSS, Git,
          Node.js, and Express.js
        </span>{" "}
        to build scalable, high-performance web applications. I enjoy working in
        team, solving challenges and exploring new technologies to build
        impactful, user-centered applications. 💪 Let's connect and collaborate
        to explore new possibilities 🚀🤝
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy listening
        music, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new technologies</span>. I am
        currently learning about <span className="font-medium">PostgreSQL</span>
        .
      </p>
    </motion.section>
  );
}
