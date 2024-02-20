import { Asset, RichText, Teacher } from "./common.model";

export type   BlogPost = {
  capa: Asset;
  corpo: Corpo[];
  publishedDate: string;
  id: string;
  autor: Teacher;
  resumo: string;
  titulo: string;
};

export interface Conteudo {
  id?: string;
  texto?: RichText;
  imagem?: Asset;
  legenda?: string;
  espacoVazio?: boolean;
}

interface Corpo {
  colunaDupla?: boolean;
  comMargem?: boolean;
  conteudo?: Conteudo[];
  id?: string;
}