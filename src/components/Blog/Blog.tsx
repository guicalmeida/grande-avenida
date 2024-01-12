"use client";

import blog_btn from "../../../public/blog_btn.svg";
import Image, { StaticImageData } from "next/image";
import useMobileCheck from "@/hooks/useMobileCheck";
import MobileBlog from "./MobileBlog";
import DesktopBlog from "./DesktopBlog";

export type PostProps = {
  title: string;
  author: string;
  text: string;
  path: string;
  coverUrl: string | StaticImageData;
};

export default function Blog({ posts }: { posts: PostProps[] }) {
  const isMobile = useMobileCheck();
  return (
    <div>
      <div className="flex justify-between mb-12 items-center">
        <h2 className="font-timesNow text-[120px] font-normal leading-[120px] tracking-[-2.4px]">
          Blog
        </h2>
        <a href="/">
          <Image src={blog_btn} alt="Textoos com conteúdo e pensamento" />
        </a>
      </div>
      {isMobile ? <MobileBlog posts={posts} /> : <DesktopBlog posts={posts} />}
    </div>
  );
}
