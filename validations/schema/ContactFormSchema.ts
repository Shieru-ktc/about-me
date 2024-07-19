import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z
    .string({
      required_error: "メールアドレスをいれてね",
    })
    .email({
      message: "メアドちゃうわボケ",
    }),
  name: z.string({
    required_error: "名無しやめろ",
  }),
  content: z
    .string({
      required_error: "なんでここ空やねん何しに来たん",
    })
    .min(5, {
      message: "短すぎじゃアホ",
    })
    .max(1000, {
      message: "長すぎやバカタレ",
    }),
});
