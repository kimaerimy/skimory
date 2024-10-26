import { z } from "zod";

export const AuthSchema = z.object({
  email: z
    .string()
    .email({ message: "올바른 형식의 이메일 주소를 입력해주세요." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 최소 8자 이상 입력해주세요." })
    .regex(/[A-Z]/, {
      message: "비밀번호는 최소 1개 이상의 대문자를 포함해야 합니다.",
    })
    .regex(/[a-z]/, {
      message: "비밀번호는 최소 1개 이상의 소문자를 포함해야 합니다.",
    }),
});
