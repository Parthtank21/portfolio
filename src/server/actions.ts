"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  if (!validateString(senderEmail, 70)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(senderMessage, 1000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: "parthtank301@gmail.com",
      replyTo: senderEmail as string,
      subject: "New Message from Portfolio Contact Form",
      text: senderMessage as string,
    });

    if (error) {
      return {
        error: getErrorMessage(error),
      };
    }

    return {
      data,
    };
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
