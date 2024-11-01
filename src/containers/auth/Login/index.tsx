import ButtonOutline from "@/components/ButtonOutline";
import HorizontalLine from "@/components/HorizontalLine";
import Link from "next/link";
import EmailForm from "../EmailForm";
import { logInAction } from "@/actions/auth";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2 text-slate-800">
            당신의 피부 데이터가 기다리고 있어요
          </h1>
          <h2 className="text-xl text-slate-600">
            지금 로그인하고 진행 상황을 확인하세요!
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <ButtonOutline>
            <div className="flex items-center justify-center gap-1">
              <p>google로 로그인</p>
            </div>
          </ButtonOutline>
          <ButtonOutline>kakao로 로그인</ButtonOutline>
        </div>
      </section>
      <HorizontalLine>or</HorizontalLine>
      <section>
        <div>
          <EmailForm buttonTitle="로그인" action={logInAction} />
        </div>
      </section>
      <div>
        <p className="text-slate-500 text-right text-sm">
          계정이 없으신가요?&nbsp;&nbsp;
          <Link href="/auth/signup" className="underline hover:text-slate-800">
            Sign up Now
          </Link>
        </p>
      </div>
    </div>
  );
}
