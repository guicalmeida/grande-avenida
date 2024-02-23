import { HomeBlogPost } from "@/models/home.model";
import Separator from "../Separator";
import formatAuthors from "@/utils/formatAuthors";

export default function MobileBlog({ posts }: { posts: HomeBlogPost[] }) {
  return (
    <>
      <div>
        <Separator />

        {posts.slice(0, 3).map((post) => {
          const { slug, titulo, autores } = post;
          return (
            <>
              <div key={titulo} className="py-8">
                <div className="flex items-center justify-between mb-8 text-3xl">
                  <a href={`blog/${slug}`}>
                    <h3 className="font-timesNow w-60">{titulo}</h3>
                  </a>
                  <a
                    className="bg-white px-3 py-3 font-azeret font-medium uppercase text-xs border-solid border-2 border-black rounded-[100px] w-36"
                    href={`blog/${slug}`}
                  >
                    <span>Texto completo</span>
                  </a>
                </div>
                <div className="font-azeret text-sm font-semibold flex items-center uppercase justify-between">
                  <span className="w-36">Por: {formatAuthors(autores)}</span>
                </div>
              </div>
              <Separator />
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
