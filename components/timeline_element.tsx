import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from 'next/image';
import { useTheme } from "@/context/theme_context";

type ExperienceElementProps = {
  item: {
    date: string
    logo: StaticImageData
    title: string
    location: string
    description: string
  }
}

export default function TimelineElement({ item }: ExperienceElementProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
          boxShadow: "none",
          border: theme === "light" ? "1px solid rgba(0,0,0,0.05)" : "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "left",
          padding: "1.25rem 1.5rem 1.25rem 1.5rem"
        }}
        contentArrowStyle={{
          borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.4)"
        }}
        date={item.date}
        icon={
          <Image
            className="scale-[0.85]"
            src={item.logo}
            alt="companyLogo"
          />
        }
        iconStyle={{
          background: theme === "light" ? "white" : "#29303D",
          fontSize: "0.5rem",
          scale: 1.15,
          padding: 1,
          color: theme === "light" ? "#f3f4f6" : "#023984",
          borderBlockColor: "#023984"
        }}
        visible={inView}
      >
        <h3 className="font-semibold capitalize dark:text-white/85">{item.title}</h3>
        <p className="font-normal text-gray-600 !mt-0 dark:text-white/70">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-600 dark:text-white/70">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}