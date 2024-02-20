import { PropsWithChildren } from "react";

export default function LinkButton({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      className="block bg-white px-[30px] py-[20px] font-azeret font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px] w-[fit-content] hover:bg-primary transition-all"
    >
      <span>{children}</span>
    </a>
  );
}
