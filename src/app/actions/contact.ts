"use server";

import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export type ContactState = { ok: boolean; error?: "validation" | "send" };

export async function sendContact(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company") ?? "",
  });

  // honeypot lleno o validación falla → cortamos (sin revelar a bots)
  if (!parsed.success || (parsed.data.company ?? "") !== "") {
    return { ok: false, error: "validation" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return { ok: false, error: "send" };
  }

  const { name, email, message } = parsed.data;
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `Portfolio — mensaje de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    });
    if (error) return { ok: false, error: "send" };
    return { ok: true };
  } catch {
    return { ok: false, error: "send" };
  }
}
