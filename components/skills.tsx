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
  const { ref } = useSectionInView("Skills");
  
  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-500">
        {
          skillsData.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
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
