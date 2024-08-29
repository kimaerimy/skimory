import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Image src="/logo.ico" alt="logo" width={40} height={40} />
      </Link>
    </header>
  );
}
