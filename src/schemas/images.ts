import { z } from "zod";

export const ImageSchema = z
  .any()
  .refine((file) => file.size > 0 && "type" in file, {
    message: "파일을 첨부해주세요.",
  })
  .refine((file) => file.type.startsWith("image/"), {
    message: "이미지 파일만 업로드 가능합니다.",
  })
  .refine((file) => file.size <= 5_242_880, {
    message: "5MB 이하의 이미지 파일만 업로드 가능합니다.",
  });
