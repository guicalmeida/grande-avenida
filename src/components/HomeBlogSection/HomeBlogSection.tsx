"use client";

import blog_btn from "../../../public/blog_btn.svg";
import Image from "next/image";
import useMobileCheck from "@/hooks/useMobileCheck";
import MobileBlog from "./MobileBlog";
import DesktopBlog from "./DesktopBlog";
import Title from "../Title";
import { HomeBlogPost } from "@/models/home.model";

export default function HomeBlogSection({ posts }: { posts: HomeBlogPost[] }) {
  const isMobile = useMobileCheck();
  return (
    <div>
      <div className="flex justify-between mb-3  md:mb-12 items-center">
        <a href="/blog">
          <Title heading="h2">Blog</Title>
        </a>
        <a href="/blog" className="hidden md:block">
          <Image src={blog_btn} alt="Textos com conteúdo e pensamento" />
        </a>
      </div>
      {isMobile ? <MobileBlog posts={posts} /> : <DesktopBlog posts={posts} />}
    </div>
  );
}
