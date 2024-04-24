"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/email/contact_form_email";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(message, 5000)) {
    return { error: "Invalid message" }
  }
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid email" }
  }

  let data;
  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "chrisesco.tech@gmail.com",
      subject: "message",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, { 
        message: message as string,
        senderEmail: senderEmail as string
      })
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }

  return {
    data
  };
}