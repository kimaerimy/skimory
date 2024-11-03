import { CalendarDays, ClipboardList, House, UserRoundCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full backdrop-blur-lg">
      <div className="container max-w-4xl mx-auto px-6 py-3">
        <ul className="flex gap-2 justify-between">
          <li>
            <Link href="/overview">
              <House />
            </Link>
          </li>
          <li>
            <Link href="/products">
              <CalendarDays />
            </Link>
          </li>
          <li>
            <Link href="/overview">
              <ClipboardList />
            </Link>
          </li>
          <li>
            <Link href="/settings">
              <UserRoundCog />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
