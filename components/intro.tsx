"use client";

import Image from 'next/image';
import profilePic from '@/public/toad_dr_pepper.jpg';
import React from 'react';
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
          </motion.div>
          <motion.span 
            className="absolute -bottom-1 -left-5 text-4xl"
            initial = {{ opacity: 0, scale: 0 }}
            animate = {{ opacity: 1, scale: 1 }}
            transition = {{ 
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.5
            }}
          >
            👋
          </motion.span>
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
        <span className="italic">{`applications, websites, and frameworks`}</span>. My preferred technologies are{" "}
        <span className="underline">{`Python, C++, Ruby on Rails, SQL, and React`}</span>.
      </motion.p>
    </section>
  )
}