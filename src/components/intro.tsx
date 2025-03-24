"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { changeActiveSection, changeTimeOfLastClick } =
    useActiveSectionContext();
  const { ref } = useSectionInView("Home", {
    amount: 0.75,
  });

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
              height={192}
              width={192}
              quality={95}
              priority={true}
              alt="Parth Profile"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          onClick={() => {
            changeActiveSection("Contact");
            changeTimeOfLastClick(Date.now());
          }}
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
        >
          Let's Connect{" "}
          <FaArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Parth-Tank-Resume.pdf"
          className="bg-white text-gray-700 hover:text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition group cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:text-white/95"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/parthtank301/"
          target="_blank"
          className="bg-white text-gray-700 hover:text-gray-950 text-[1.2rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:text-white/95"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/Parthtank21"
          target="_blank"
          className="bg-white text-gray-700 hover:text-gray-950 text-[1.35rem] p-4 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/80 dark:hover:text-white/95"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
