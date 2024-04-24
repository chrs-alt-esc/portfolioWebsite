import { useActiveSectionContext } from "@/context/active_section_context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export default function useSectionInView(sectionName: SectionName, thresholdValue = 0.75) {
  const { ref, inView } = useInView({
    threshold: thresholdValue
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView }
}