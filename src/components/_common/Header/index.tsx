import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-20 border-b border-slate-200">
      <div className="flex justify-center items-center p-4">
        <Link href="/">
          <Image src="/logo.ico" alt="logo" width={40} height={40} />
        </Link>
      </div>
    </header>
  );
}
