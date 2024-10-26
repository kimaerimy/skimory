import { CalendarDays, ClipboardList, House, UserRoundCog } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 w-full backdrop-blur-lg">
      <div className="container max-w-4xl mx-auto px-6 py-3">
        <ul className="flex gap-2 justify-between">
          <li>
            {/* 홈 아이콘 */}
            <Link href="/skinlog">
              <House />
            </Link>
          </li>
          <li>
            {/* 기록 아이콘 */}
            <Link href="/skinlog">
              <CalendarDays />
            </Link>
          </li>
          <li>
            {/* 기록 아이콘 */}
            <Link href="/skinlog">
              <ClipboardList />
            </Link>
          </li>
          <li>
            {/* 세팅 아이콘 */}
            <Link href="/settings">
              <UserRoundCog />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
