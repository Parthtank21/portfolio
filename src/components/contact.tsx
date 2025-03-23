"use client";

import React from "react";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import SubmitButton from "./submit-btn";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/server/actions";

export default function Contact() {
  const { ref } = useSectionInView("Contact", {
    amount: 0.75,
  });

  async function formAction(formData: FormData) {
    const { error } = await sendEmail(formData);
    if (error) {
      toast.error(error);
      return;
    }
    toast.success("Email sent successfully!");
  }

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:parthtank301@gmail.com" className="underline">
          parthtank301@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form action={formAction} className="mt-10 flex flex-col">
        <input
          type="email"
          name="senderEmail"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email"
          maxLength={70}
          required
        />
        <textarea
          name="senderMessage"
          className="h-52 my-3 rounded-lg borderBlack p-4 resize-none"
          placeholder="Your message"
          maxLength={1000}
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
