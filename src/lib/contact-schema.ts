import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "nameMin").max(80, "nameMax"),
  email: z.string().trim().email("emailInvalid").max(120, "emailMax"),
  message: z.string().trim().min(10, "messageMin").max(2000, "messageMax"),
  // honeypot anti-spam: debe quedar vacío
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
