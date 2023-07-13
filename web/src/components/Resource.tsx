import Link from "next/link";
import { ReactNode } from "react";

interface ResourceProps {
  children: ReactNode;
  title: string;
  link?: string;
}

export function Resource({ children, title, link }: ResourceProps) {
  return (
    <Link
      className="w-24 text-center flex flex-col items-center"
      href={link || "#"}
    >
      <div
        className="w-20 h-20 bg-green-600 rounded-md flex justify-center items-center font-bold"
      >
        {children}
      </div>

      <span
        className="text-[#666] mt-1 text-xs"
      >
        {title}
      </span>
    </Link>
  );
}