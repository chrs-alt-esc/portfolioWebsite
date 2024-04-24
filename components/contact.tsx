"use client";

import React from 'react'
import SectionHeading from './section_heading'
import useSectionInView from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit_button';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.8);
  
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mt-20 sm:mt-28 mb-32 sm:mb-42 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-500 -mt-4">
        Please contact me directly at {" "}
        <a className="underline font-semibold" href="chrisesco.tech@gmail.com">chrisesco.tech@gmail.com</a> {""} or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {      
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required={true}
          maxLength={500}
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
        />
        <textarea
          name="message"
          required={true}
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
        />
        <SubmitButton />
      </form>
    </motion.section>
  )
}
