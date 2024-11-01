import ErrorMessage from "@/components/ErrorMessage";
import { ImageSchema } from "@/schemas/images";
import { useDateStore } from "@/store/date";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useState, ChangeEvent, useRef } from "react";

interface Props {
  imgUrl: string;
  setImgUrl: (url: string) => void;
}
export const ConditionImageUpload = ({ imgUrl, setImgUrl }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const { selectedDate } = useDateStore();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setError("");

    if (e.target.files) {
      const file = e.target.files[0];
      const validateImage = ImageSchema.safeParse(file);

      if (validateImage.success) {
        const { data, error } = await supabase.storage
          .from("photos")
          .upload(`${user?.id}/${selectedDate}/${file.name}`, file, {
            upsert: true,
          });
        if (data) {
          const {
            data: { publicUrl },
          } = supabase.storage.from("photos").getPublicUrl(data.path);
          setImgUrl(publicUrl);
        }
      } else {
        if (fileRef.current) fileRef.current.value = "";
        setError(validateImage.error.errors[0].message);
      }
    }
  };

  return (
    <div>
      <h2 className="text-lg">파일업로드</h2>
      <input
        type="file"
        name="photo"
        accept="image/*"
        ref={fileRef}
        onChange={handleChange}
      />
      {imgUrl && (
        <Image
          src={imgUrl}
          alt="미리보기"
          width="100"
          height="100"
          style={{ width: "300px", height: "auto" }}
        />
      )}

      {error && <ErrorMessage message={error} />}
    </div>
  );
};
