import { Asset, RichText, Teacher } from "./common.model";

export type Course = {
  capa: Asset;
  corpo: RichText;
  fim?: string;
  formatoDaAula?: string;
  id: string;
  inicio: string;
  professores: Teacher[];
  statusDeInscricao: boolean;
  titulo: string;
  valor?: string;
  slug: string
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
