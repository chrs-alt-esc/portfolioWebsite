import { useActiveSectionContext } from "@/context/active_section_context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export default function useSectionInView(sectionName: SectionName, thresholdValue = 0.6, initiallyInView = false) {
  const { ref, inView } = useInView({
    threshold: thresholdValue,
    initialInView: initiallyInView
  });
  const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (sectionName  === "About" && activeSection === "Home" ) {
      setActiveSection("Home");
    }
    else if (sectionName === "Home" && !inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
    else if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [activeSection, inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView }
}
