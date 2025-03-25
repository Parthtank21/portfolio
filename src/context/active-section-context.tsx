"use client";

import type { SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProps = {
  activeSection: SectionName;
  changeActiveSection: (section: SectionName) => void;
  timeOfLastClick: number;
  changeTimeOfLastClick: (value: number) => void;
};

const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const changeActiveSection = (section: SectionName) =>
    setActiveSection(section);

  const changeTimeOfLastClick = (value: number) => setTimeOfLastClick(value);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        changeActiveSection,
        timeOfLastClick,
        changeTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
