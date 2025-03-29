import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import miroImg from "/public/project-miro.png";
import rmtdevImg from "/public/project-paritydeals.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MERN Stack Developer",
    location: "Green Apex, Ahmedabad",
    description:
      "After completing my internship, I joined Green Apex Solutions, where I worked on legacy systems, client projects, and in-house initiatives. My role involved utilizing technologies such as ReactJS, NextJS, Strapi CMS, and NodeJS to develop and enhance applications.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Present",
  },
  {
    title: "ReactJS Developer",
    location: "Lucent Innovation, Ahmedabad",
    description:
      "At Lucent Innovation, I had an incredible six-month internship where I got hands-on experience working on diverse projects. I explored exciting technologies like HTML Canvas, Wix, React, and Node.js, and even dived into product customization, sharpening my skills in real-world applications.",
    icon: React.createElement(FaReact),
    date: "Feb 2023 - Aug 2023",
  },
  {
    title: "Bachlors in Information Technology",
    location: "Marwadi University, Rajkot",
    description:
      "I completed my Bachelor's in Information Technology from Marwadi University in 2023. During my studies, I explored various subjects, including Data Structures & Algorithms, Computer Networks, and Operating Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Miro",
    description:
      "Miro clone - A collaborative, real-time whiteboard. Packed with features such as real-time database, whiteboard from scratch with ability to add shapes like Rectangles and Ellipses, Sticky notes and Pencil drawing.",
    tags: ["React", "NextJS", "Clerk", "Convex", "LiveBlocks"],
    imageUrl: miroImg,
    link: "https://miro-clone-v1.vercel.app/",
  },
  {
    title: "Parity Deals",
    description:
      "I developed a personal project cloning the ParityDeals website, which offers location-based dynamic pricing to maximize sales across countries.",
    tags: ["NextJS", "Clerk", "Tailwind", "ShadCN", "NeonDB", "Drizzle"],
    imageUrl: rmtdevImg,
    link: "https://paritydeal.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "Apollo",
  "Git",
  "Strapi CMS",
] as const;
