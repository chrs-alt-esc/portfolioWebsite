// used this Github comment 
// (https://github.com/stephane-monnot/react-vertical-timeline/issues/166#issuecomment-1752408302)
// for experiences animation as Next.JS 14 is buggy with react-vertical-timeline
"use client";
import { experiencesData } from "@/lib/data";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "./timeline_element";
import SectionHeading from "./section_heading";
import useSectionInView from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.7);
  
  return (
    <section
      ref={ref}
      className="my-10 sm:mb-20 flex w-full scroll-mt-28 flex-col items-center justify-center"
      id="experience"
    >
      <SectionHeading>My Work Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return ( <TimelineElement key={index} item={item} /> );
        })}
      </VerticalTimeline>
    </section>
  );
}