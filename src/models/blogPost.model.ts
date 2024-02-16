import { Asset, RichText, Teacher } from "./common.model";

export type BlogPost = {
  capa: Asset;
  corpo: RichText;
  publishedDate: string;
  id: string;
  autor: Teacher;
  resumo:  string;
  titulo: string;
};
