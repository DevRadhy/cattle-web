import Link from "next/link";
import { HomeIcon, LayoutGridIcon, BellIcon, UserIcon } from "lucide-react";

export function NavBar() {
  return (
    <div>
      <div
        className="flex w-full bg-green-600 h-16 justify-around items-center bottom-0 fixed rounded-t-xl"
      >
        
        <Link href="/">
          <HomeIcon color="white"/>
        </Link>

        <Link href="#">
          <LayoutGridIcon color="white"/>
        </Link>

        <Link href="#">
          <BellIcon color="white"/>
        </Link>

        <Link href="/profile">
          <UserIcon color="white"/>
        </Link>
      </div>
    </div>
  );
}