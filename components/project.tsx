"use client";

import React, {useRef} from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { TbExternalLink } from "react-icons/tb";
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]

  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-100 max-w-[48rem] borderBlack overflow-hidden h-auto sm:pr-8 sm:h-[22rem] relative hover:bg-gray-200 transition sm:group-even:pl-10 rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div className="group pt-4 pb-4 px-4 sm:pl-10 sm:pr-2 sm:pt-10 group-odd:sm:max-w-[55%] sm:max-w-[75%] flex flex-col h-full sm:group-even:ml-[19rem] dark:text-white/85">
          <h3 className="text-l sm:text-2xl font-semibold">
            {title}
            {title !== "Platform Visualization Tool" &&
              <Link href={link} target="_blank" className="relative pl-2 top-[0.3rem]">
                <button type="button">
                  <TbExternalLink className="hover:text-gray-500 dark:text-white/40 dark:hover:text-gray-50 transition scale-[0.85] hover:scale-[0.95] hover:translate-x-[0.2rem] hover:-translate-y-[0.2rem]"/>
                </button>
              </Link>
            }
          </h3>
          <p className="text-[0.9rem] sm:text-l mt-2 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li 
                key={index}
                className="bg-black/[0.3] px-2 py-1 text-[0.7rem] uppercase -tracking-wider rounded-full text-white dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        
        <Image 
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-10 -right-[7rem] w-[28.5rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-[7rem] transition group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2" 
        />
      </section>
    </motion.div>
  );
}