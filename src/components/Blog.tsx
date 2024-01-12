import calculateReadingTime from "@/utils/getReadingTime";
import blog_btn from "../../public/blog_btn.svg";
import Image from "next/image";

function Divider() {
  return (
    <hr role="separator" className="border-dotted border-t-1 border-black" />
  );
}

export type PostProps = {
  title: string;
  author: string;
  text: string;
  textPath: string;
};

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
      <div>
        <Divider />
        {posts.slice(0, 3).map((post) => {
          return (
            <>
              <div key={post.title} className="py-8">
                <div className="flex items-center justify-between mb-8 text-6xl leading-[60px] font-normal tracking-[-1.2px]">
                  <a href={post.textPath}>
                    <h3 className="font-timesNow">{post.title}</h3>
                  </a>
                  <a
                    className="bg-white px-[26px] py-[20px] tracking-[-0.28px] font-azeret font-medium uppercase text-sm border-solid border-2 border-black rounded-[100px]"
                    href={post.textPath}
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
    </div>
  );
}
