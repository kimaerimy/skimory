"use client";

import Button from "@/components/Button";
import ErrorMessage from "@/components/ErrorMessage";
import Input from "@/components/Input";
import useFormValidate from "@/hooks/useFormValidate";
import { AuthSchema } from "@/schemas/auth";
import { Session, User } from "@supabase/supabase-js";
import { ChangeEvent, useActionState } from "react";

interface Props {
  buttonTitle: string;
  action: (
    _: any,
    formData: FormData
  ) => Promise<{
    success?: boolean;
    error?: string;
    data?: { user: User | null; session: Session | null };
  }>;
  children?: React.ReactNode;
}

interface EmailFormError {
  email?: string;
  password?: string;
}

export default function EmailForm({ buttonTitle, action }: Props) {
  const { errors, validateField } = useFormValidate<EmailFormError>(AuthSchema);
  const [state, formAction, isPending] = useActionState(action, null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
    if (state?.error) {
      state.error = "";
    }
  };
  return (
    <form action={formAction}>
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          onChange={handleChange}
          error={!!errors?.email}
        />
        {errors?.email && <ErrorMessage message={errors?.email[0]} />}
        <Input
          type="password"
          name="password"
          placeholder="********"
          onChange={handleChange}
          error={!!errors?.password}
        />
        {errors?.password && <ErrorMessage message={errors?.password[0]} />}
        {state?.error && <ErrorMessage message={state?.error} />}
        <Button type="submit" disabled={isPending}>
          {buttonTitle}
        </Button>
      </div>
    </form>
  );
}
