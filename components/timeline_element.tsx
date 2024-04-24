import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Image, { StaticImageData } from 'next/image';

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

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0,0,0,0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem"
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af"
        }}
        date={item.date}
        icon={
          <Image
            className="scale-[0.85] pt-[2px]"
            src={item.logo}
            alt="companyLogo"
          />
        }
        iconStyle={{
          background: "white",
          fontSize: "0.5rem",
          scale: 1.15,
          padding: 1
        }}
        visible={inView}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="font-normal text-gray-600 !mt-0">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-600">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
}