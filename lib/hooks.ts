import { useActiveSectionContext } from "@/context/active_section_context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";


export default function useSectionInView(sectionName: SectionName, thresholdValue = 0.6, initiallyInView = false) {
  const [ width, setWidth ] = useState(0)
  const [ height, setHeight ] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  // This is to help with activeSection responsiveness on small smarthphone devices
  // without this, the 'Experience' section does not get activated properly when scrolling up from bottom
  if ((width < 400 || height < 800) && sectionName === "Experience") {
    thresholdValue = thresholdValue * 0.4;
  }
  if ((width >= 400 || height >= 800) && sectionName === "Experience") {
    thresholdValue = thresholdValue * 1.5;
  }
  
  const { ref, inView } = useInView({
    threshold: thresholdValue,
    initialInView: initiallyInView
  });
  const { activeSection, setActiveSection, timeOfLastClick } = useActiveSectionContext();


  useEffect(() => {
    handleWindowResize();

    if (sectionName  === "About" && activeSection === "Home" ) {
      setActiveSection("Home");
    }
    else if (sectionName === "Home" && !inView && activeSection === "Home" && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
    else if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
    else if (activeSection === "Contact" && !inView && Date.now() - timeOfLastClick > 1000) {

      setActiveSection("Skills");
    }
  }, [activeSection, inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView }
}
