import Link from "next/link";
import { PropsWithChildren } from "react";

export default function LinkButton({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="block bg-white px-[18px] md:px-[30px] py-3 md:py-[20px] font-azeret font-medium uppercase leading-[9px] md:leading-[14px] text-[9px] md:text-sm border-solid border-[1px] md:border-2 border-black rounded-[100px] w-[fit-content] hover:bg-primary transition-all"
    >
      {children}
    </Link>
  );
}
