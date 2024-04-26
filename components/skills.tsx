"use client";

import { skillsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './section_heading'
import useSectionInView from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index
    }
  })
}

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.95);
  
  return (
    <section ref={ref} id="skills" className="mb-24 mt-32 max-w-[45rem] scroll-mt-28 text-center sm:mb-48 sm:mt-52">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-sm sm:text-lg text-gray-500">
        {
          skillsData.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white borderBlack rounded-xl px-3 py-2 sm:px-5 sm:py-3 dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
