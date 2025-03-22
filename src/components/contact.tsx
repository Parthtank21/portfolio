"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa6";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact", {
    amount: 0.75,
  });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:parthtank301@gmail.com" className="underline">
          parthtank301@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action="" className="mt-10 flex flex-col">
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 resize-none"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </button>
      </form>
    </motion.section>
  );
}
