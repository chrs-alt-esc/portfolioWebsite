"use client";

import Image from 'next/image';
import profilePic from '@/public/cropped_profile_pic.png';
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import useSectionInView from '@/lib/hooks';
import { useActiveSectionContext } from "@/context/active_section_context";


export default function Intro() {
  const { ref } = useSectionInView("Home", 0.4, true);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-8 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial = {{ opacity: 0, scale: 0 }}
            animate = {{ opacity: 1, scale: 1 }}
            transition = {{ 
              type: "tween",
              duration: 0.2
            }}
          >
            <Image 
              src={profilePic}
              alt="Dr. Pepper Toad"
              width="192"
              height="192"
              quality="80"
              priority={true}
              className="h-24 w-24 sm:h-24 sm:w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
              <motion.span 
                className="absolute -bottom-1 -left-7 text-4xl"
                animate = {{ 
                  x: [0, -7, 0, 6, 0, -7, 0],
                  rotate: [0, -18, 0, 18, 0, -18, 0]
                }}
                transition = {{ 
                  delay: 1,
                  duration: 0.75,
                  time: [0, 0.1, 0.25, 0.35, 0.5, 0.625, 0.75],
                }}
              >
                👋
              </motion.span>
          </motion.div>          
        </div>
      </div>
      <motion.p 
        className="mb-10 mt-4 px-4 text-[1.15rem] font-medium !leading-[1.5] sm:text-3xl"
        initial = {{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
      >
        Hi, I'm{" "}
        <span className="font-bold">{`Chris Escobar`}</span>! I'm a{" "}
        <span className="font-bold">{`software developer`}</span> with{" "}
        <span className="font-bold">{`3 years`}</span> of experience. I enjoy building{" "}
        <span className="italic">{`applications and websites`}</span>. My focus is{" "}
        <span className="underline">{`Backend and Full Stack development`}</span>.
      </motion.p>

      <motion.div 
        className="flex flex-wrap sm:flex-row items-center justify-center gap-6 px-6 text-s sm:text-lg font-medium"
        initial = {{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link 
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:text-white/80"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition dark:opacity-100"/>
        </Link>
        <a 
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full borderBlack outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/20 dark:text-white/80"
          href="/Chris_Escobar_resume_tech2c.pdf"
          download
        >
          Download resume <HiDownload className="opacity-60 transition"/>
        </a>
        <div className="flex sm:flex-row justify-center items-center sm:gap-6 px-7 sm:px-0">
          <a 
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full borderBlack outline-none mr-10 sm:mr-0 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/20 dark:text-white/80"
            href="https://www.linkedin.com/in/chris-r-escobar/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          
          <a 
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full borderBlack outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/20 dark:text-white/80"
            href="https://github.com/crscobar"
            target='_blank'
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  )
}