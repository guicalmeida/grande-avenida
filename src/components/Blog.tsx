import calculateReadingTime from "@/utils/getReadingTime";
import blog_btn from "../../public/blog_btn.svg";
import Image, { StaticImageData } from "next/image";

function Divider() {
  return (
    <hr role="separator" className="border-dotted border-t-1 border-black" />
  );
}

export type PostProps = {
  title: string;
  author: string;
  text: string;
  path: string;
  coverUrl: string | StaticImageData;
};

function MobileBlog({ posts }: { posts: PostProps[] }) {
  return (
    <>
      <div>
        <Divider />
        {posts.slice(0, 3).map((post) => {
          return (
            <>
              <div key={post.title} className="py-8">
                <div className="flex items-center justify-between mb-8 text-6xl leading-[60px] font-normal tracking-[-1.2px]">
                  <a href={post.path}>
                    <h3 className="font-timesNow">{post.title}</h3>
                  </a>
                  <a
                    className="bg-white px-[26px] py-[20px] tracking-[-0.28px] font-azeret font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px]"
                    href={post.path}
                  >
                    <span>Texto completo</span>
                  </a>
                </div>
                <div className="font-azeret text-xl leading-7 font-semibold flex items-center uppercase gap-[170px]">
                  <span>Por: {post.author}</span>
                  <span>Leitura: {calculateReadingTime(post.text)}</span>
                </div>
              </div>
              <Divider />
            </>
          );
        })}
      </div>
      {posts.length > 3 && (
        <a className="bg-white px-[30px] py-[19px] tracking-[-0.28px] font-azeret font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px] mt-6 block w-[fit-content]">
          <span>Mais textos</span>
        </a>
      )}
    </>
  );
}

function DesktopBlog({ posts }: { posts: PostProps[] }) {
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

export default function Blog({ posts }: { posts: PostProps[] }) {
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
      <DesktopBlog posts={posts} />
    </div>
  );
}
