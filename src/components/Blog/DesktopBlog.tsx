import Image from "next/image";
import { PostProps } from "./Blog";

export default function DesktopBlog({ posts }: { posts: PostProps[] }) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 grid-flow-col gap-[10px] h-[720px]">
      {posts.slice(0, 3).map((post, i) => {
        return (
          <div
            key={post.title}
            className={
              "first:bg-primary first:row-span-2 first:col-span-2 hover:bg-primary rounded-[60px] relative px-[60px] py-10 flex flex-col items-center justify-between group duration-300 transition-colors"
            }
          >
            <Image
              src={post.coverUrl}
              alt={post.title}
              className="absolute top-0 left-0 object-cover h-[100%] rounded-[60px] -z-10"
            />
            {i === 0 && (
              <span className="uppercase leading-5 font-semibold font-azeret text-[28px]">
                Novo texto!
              </span>
            )}
            <a href={post.path}>
              <h3
                className={
                  "group-first:text-[120px] group-first:leading-[100px] group-first:opacity-100 text-5xl group-hover:opacity-100 font-timesNow opacity-0 font-normal tracking-[-2.4px] text-center duration-300 transition-opacity"
                }
              >
                {post.title}
              </h3>
            </a>
            <a
              href={post.path}
              className={
                "group-first:opacity-100 group-hover:opacity-100 bg-white opacity-0 px-[30px] py-[20px] font-azeret duration-300 transition-opacity font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px]"
              }
            >
              <span>saiba mais</span>
            </a>
          </div>
        );
      })}
    </div>
  );
}
