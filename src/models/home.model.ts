import { BlogPost } from "./blogPost.model";
import { Asset } from "./common.model";
import { Course } from "./course.model";

interface Galeria {
  id: string;
  imagem: Asset;
  legenda: string;
}

interface Carrossel {
  descricao: string;
  id: string;
  imagem: Asset;
  url: string;
}

export type HomeBlogPost = Pick<
  BlogPost,
  "capa" | "titulo" | "slug" | "autores"
>;
export type HomeCourse = Pick<Course, "capa" | "titulo" | "slug">;

export interface Home {
  blogs: HomeBlogPost[];
  cursos: HomeCourse[];
  galerias: Galeria[];
  carrosseis: Carrossel[];
}
