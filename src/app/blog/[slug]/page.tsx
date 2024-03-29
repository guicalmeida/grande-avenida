import { Conteudo } from "@/models/blogPost.model";
import { getBlog, getBlogs } from "@/services/blog";
import formatAuthors from "@/utils/formatAuthors";
import calculateReadingTime from "@/utils/getReadingTime";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
  const blogPosts = await getBlogs();

  return blogPosts?.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getBlog(params.slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.titulo,
    description: post.resumo,
    openGraph: {
      images: [post.capa.url, ...previousImages],
      type: 'article',
      authors: post.autores.map(autor => autor.nome),
      publishedTime: post.publishedDate
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlog(params.slug);
  const { autores, capa, corpo, titulo } = post;

  let onlyText = "";
  corpo.forEach((section) => {
    section?.conteudo?.forEach((cont) => {
      if (cont?.texto?.html) {
        onlyText += `\n${cont.texto.html}`;
      }
    });
  });
  return (
    <main className="mx-auto mb-16">
      <div className="h-[580px] md:h-[850px] w-[100%] relative flex items-center justify-center">
        <div>
          <div
            aria-hidden
            className="bg-[rgba(0,0,0,0.4)] absolute left-0 top-0 z-[1] w-[100%] h-[100%]"
          />
          <Image
            className="absolute left-0 top-0 z-0 w-[100%] h-[100%] object-cover"
            src={capa.url}
            height={capa.height}
            width={capa.width}
            alt={titulo}
          />
        </div>
        <div className="md:max-w-[1120px] font-timesNow text-white flex flex-col justify-center gap-20 absolute text-center z-10 shadow-sm">
          <h1 className="md:text-8xl text-[50px]">{titulo}</h1>
          <div className="uppercase font-semibold font-azeret text-xs md:text-xl">
            <p>Por: {formatAuthors(autores)}</p>
            <p>Tempo de leitura: {calculateReadingTime(onlyText)}</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 mt-7 flex flex-col gap-14 md:gap-[140px]">
        {corpo.map((section) => {
          return (
            <div
              key={section.id}
              className={`${
                section.comMargem ? "md:mx-[15%]" : "w-[100%]"
              } flex flex-col md:flex-row gap-[24px] `}
            >
              {section.conteudo?.map((content) => {
                return (
                  <div
                    key={content.id}
                    className={`${
                      section.colunaDupla ? "w-[100%] md:w-[50%]" : ""
                    }`}
                  >
                    <GetBlogSection content={content} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
}

function GetBlogSection({ content }: { content: Conteudo }) {
  const { espacoVazio, imagem, legenda, texto } = content;

  if (espacoVazio) {
    return <div></div>;
  } else if (!!imagem?.url) {
    return (
      <div>
        <Image
          className="w-[100%] max-h-[520px] h-[100%] object-cover"
          src={imagem.url}
          height={imagem.height}
          width={imagem.width}
          alt={legenda || ""}
        />
        {legenda && (
          <p className="uppercase font-azeret text-xs leading-6 mt-3">
            {legenda}
          </p>
        )}
      </div>
    );
  } else if (!!texto?.html) {
    return (
      <div
        className="font-azeret leading-7 [&>p]:mb-6 text-base [&>blockquote]:font-timesNow [&>blockquote]:md:text-6xl [&>blockquote]:text-3xl [&>blockquote]:leading-8 [&>blockquote]:md:leading-[60px]"
        dangerouslySetInnerHTML={{ __html: texto.html }}
      ></div>
    );
  }
}
