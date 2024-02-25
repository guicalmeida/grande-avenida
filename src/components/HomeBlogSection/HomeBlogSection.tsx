"use client";

import Image from "next/image";
import useMobileCheck from "@/hooks/useMobileCheck";
import MobileBlog from "./MobileBlog";
import DesktopBlog from "./DesktopBlog";
import Title from "../Title";
import { HomeBlogPost } from "@/models/home.model";
import Link from "next/link";

export default function HomeBlogSection({ posts }: { posts: HomeBlogPost[] }) {
  const isMobile = useMobileCheck();
  return (
    <div>
      <div className="flex justify-between mb-3  md:mb-12 items-center">
        <Link href="/blog">
          <Title heading="h2">Blog</Title>
        </Link>
      </div>
      {isMobile ? <MobileBlog posts={posts} /> : <DesktopBlog posts={posts} />}
    </div>
  );
}
