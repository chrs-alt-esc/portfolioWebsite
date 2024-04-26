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

  console.log("\nCurrent Active Section: " + activeSection);
  console.log("Passed in section: " + sectionName);

  useEffect(() => {
    if (sectionName  === "About" && activeSection === "Home" ) {
      console.log("If 1");
      setActiveSection("Home");
    }
    else if (sectionName === "Home" && !inView && Date.now() - timeOfLastClick > 1000) {
      console.log("If 2 (sectionName = " + sectionName + " )");
      setActiveSection("About");
    }
    else if (inView && Date.now() - timeOfLastClick > 1000) {
      console.log("If 4 (sectionName = " + sectionName + " )");
      console.log("If 4 (activeSection = " + activeSection + " )");
      setActiveSection(sectionName);
    }
    else if (activeSection === "Contact" && !inView && Date.now() - timeOfLastClick > 1000) {
      console.log("If 3 (sectionName = " + sectionName + " )");
      console.log("If 3 (activeSection = " + activeSection + " )");
      setActiveSection("Experience");
    }
  }, [activeSection, inView, setActiveSection, timeOfLastClick, sectionName]);

  console.log("New Active Section: " + activeSection + "\n");

  return { ref, inView }
}
