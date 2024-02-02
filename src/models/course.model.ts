type RichText = {
  html: string;
};

type Asset = {
  id: string;
  url: string;
  width: number;
  height: number;
};

export type Course = {
  capa: Asset;
  corpo: RichText;
  fim?: string;
  formatoDaAula?: string;
  id: string;
  inicio: string;
  professores: {
    id: string;
    nome: string;
    sobre: RichText;
    perfil: Asset;
  };
  statusDeInscricao: boolean;
  titulo: string;
  valor?: string;
};

export function availabilityMap(
  statusDeInscricao: boolean,
  isNextClass?: boolean
) {
  if (statusDeInscricao) {
    return isNextClass ? "PRÓXIMA\nTURMA" : "INSCRIÇÕES\nABERTAS";
  }
  return "INSCRIÇÕES\nENCERRADAS";
}