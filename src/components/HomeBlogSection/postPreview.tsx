import { BlogPost } from "@/models/blogPost.model";
import Image from "next/image";
import LinkButton from "../LinkButton";

export default function PostPreview({ blogPost }: { blogPost: BlogPost }) {
  const { capa, resumo, titulo, slug } = blogPost;
  return (
    <div className="font-azeret text-base flex flex-col gap-5">
      <a href={"blog/" + slug}>
        <Image
          className="object-cover w-[100%] rounded-[60px]"
          src={capa.url}
          alt="imagem"
          width={capa.width}
          height={capa.height}
        />
      </a>
      <div>
        <a href={"blog/" + slug}>
          <h2 className="font-semibold">{titulo}</h2>
        </a>
        <br />
        <p className="mb-8">{resumo}</p>
        <LinkButton href={"blog/" + slug}>Texto completo</LinkButton>
      </div>
    </div>
  );
}
