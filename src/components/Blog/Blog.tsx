"use client";

import blog_btn from "../../../public/blog_btn.svg";
import Image, { StaticImageData } from "next/image";
import useMobileCheck from "@/hooks/useMobileCheck";
import MobileBlog from "./MobileBlog";
import DesktopBlog from "./DesktopBlog";
import Title from "../Title";

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
      <div className="flex justify-between mb-3  md:mb-12 items-center">
        <Title heading="h2">Blog</Title>
        <a href="/blog" className="hidden md:block">
          <Image src={blog_btn} alt="Textos com conteúdo e pensamento" />
        </a>
      </div>
      {isMobile ? <MobileBlog posts={posts} /> : <DesktopBlog posts={posts} />}
    </div>
  );
}
