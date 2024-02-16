export type RichText = {
  html: string;
};

export type Asset = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Teacher = {
  id: string;
  nome: string;
  sobre: RichText;
  perfil: Asset;
};
