import { useEffect, useRef } from "react";
import { useInView, UseInViewOptions } from "motion/react";
import { useActiveSectionContext } from "@/context/active-section-context";
import type { SectionName } from "./types";

export function useSectionInView(
  sectionName: SectionName,
  inViewOptions?: UseInViewOptions
) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, inViewOptions);
  const { changeActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      changeActiveSection(sectionName);
    }
  }, [isInView, changeActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}
