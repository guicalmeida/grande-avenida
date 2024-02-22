import { ReactNode } from "react";

export default function Title({
  heading = "h2",
  children,
}: {
  heading: "h1" | "h2";
  children: ReactNode;
}) {
  const HeadingTag = heading as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className="font-timesNow text-[40px] md:text-[120px] font-normal leading-[40px] md:leading-[120px] md:tracking-[-2.4px]">
      {children}
    </HeadingTag>
  );
}
