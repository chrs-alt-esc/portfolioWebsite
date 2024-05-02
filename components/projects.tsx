"use client";

import React from 'react';
import SectionHeading from './section_heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import useSectionInView from '@/lib/hooks';
import { FaGithubSquare } from 'react-icons/fa';

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.4);
  
  return (
    <section ref={ref} id="projects" className="grid scroll-mt-28 mb-28 mt-10 sm:mt-10 sm:mb-40 place-items-center">
      <SectionHeading>Highlighted Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))
        }
      </div>
      <div className="flex py-8 sm:py-20 w-fit">
        <a 
          className="bg-white px-7 py-3 flex items-center justify-center gap-2 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/20 dark:text-white/80"
          href="https://github.com/crscobar?tab=repositories"
          target="_blank"
        >
          View the rest of my projects <FaGithubSquare className="opacity-60 transition"/>
        </a>
      </div>
     
    </section>
  )
}

