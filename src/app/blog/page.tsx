import PostPreview from "@/components/HomeBlogSection/postPreview";
import { getBlogs } from "@/services/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'Blog',
};

export default async function Blog() {
  const posts = await getBlogs()
  return (
    <main className="container mx-auto px-5 my-[72px]">
      <div className="flex justify-between w-[100%] mb-20">
        <h1 className="font-timesNow text-6xl md:text-[100px] font-normal leading-10 md:leading-[90px] tracking-[-2px] mb-5">
          Blog
        </h1>
      </div>
      <div className="flex flex-col ">
        {posts.map((post, i) => {
          const possibleWidths = ["w-[33%]", "w-[41%]", "w-[50%]"];
          const randomWidthStyle =
            possibleWidths[Math.floor(Math.random() * 3)];
          return (
            <div
              className={`${randomWidthStyle} ${
                i % 2 === 0 ? "mr-auto pr-5" : "ml-auto pl-5"
              } ${i !== 0 ? "mt-[-150px]" : ""}`}
              key={post.id}
            >
              <PostPreview blogPost={post} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
