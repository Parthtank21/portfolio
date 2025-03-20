"use client";

import React from "react";
import { motion } from "motion/react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 100,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", {
    amount: 0.75,
  });

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-700">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/10 rounded-xl px-5 py-3"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
