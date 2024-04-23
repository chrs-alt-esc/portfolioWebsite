"use client";

import Image from 'next/image';
import profilePic from '@/public/toad_dr_pepper.jpg';
import React from 'react';
import { motion, useAnimate } from "framer-motion";
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
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
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial = {{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
      >
        Hello, I'm{" "}
        <span className="font-bold">{`Chris Escobar`}</span>! I'm a{" "}
        <span className="font-bold">{`software developer`}</span> with{" "}
        <span className="font-bold">{`3 years`}</span> of experience. I enjoy building{" "}
        <span className="italic">{`applications, websites, and frameworks`}</span>. My focus is{" "}
        <span className="underline">{`Backend and Full Stack development`}</span>.
      </motion.p>

      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 text-lf font-medium"
        initial = {{ opacity: 0, y: 100 }}
        animate = {{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link 
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/>
        </Link>
        <a 
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer"
          href="/Chris_Escobar_resume_tech2c.pdf"
          download
        >
          Download resume <HiDownload className="opacity-60 transition"/>
        </a>
        <a 
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full border border-black/10 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          href="https://www.linkedin.com/in/chris-r-escobar/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a 
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full border border-black/10 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer"
          href="https://github.com/eschriscobar"
          target='_blank'
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}