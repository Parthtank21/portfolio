"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project-card";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", {
    amount: 0.4,
  });

  return (
    <section ref={ref} id="projects" className="mb-28 sm:mb-40 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectCard {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
