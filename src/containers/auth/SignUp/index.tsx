import ButtonOutline from "@/components/ButtonOutline";
import HorizontalLine from "@/components/HorizontalLine";
import { IconGoogle } from "../../../../public/svgs";
import Link from "next/link";
import EmailForm from "../EmailForm";
import { signUpAction } from "@/actions/auth";

export default function Login() {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2 text-slate-800">
            건강한 피부를 위한 첫 걸음
          </h1>
          <h2 className="text-xl text-slate-600">지금 바로 시작 하세요.</h2>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonOutline>
            <div className="flex items-center justify-center gap-1">
              <IconGoogle className="text-slate-400 w-[14px] h-[14px]" />
              <p>google로 시작하기</p>
            </div>
          </ButtonOutline>
          <ButtonOutline>kakao로 시작하기</ButtonOutline>
        </div>
      </section>
      <HorizontalLine>or</HorizontalLine>
      <section>
        <div>
          <EmailForm buttonTitle="가입하기" action={signUpAction} />
        </div>
      </section>
      <div>
        <p className="text-slate-500 text-right text-sm">
          이미 가입하신 계정이 있으신가요?&nbsp;&nbsp;
          <Link href="/auth/login" className="underline hover:text-slate-800">
            Sign In Now
          </Link>
        </p>
      </div>
    </div>
  );
}
