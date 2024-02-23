import { Teacher } from "@/models/common.model";

export default function formatAuthors(authors: Teacher[]) {
  if (authors.length === 1) {
    return `${authors[0].nome}`;
  } else if (authors.length === 2) {
    return `${authors[0].nome} & ${authors[1].nome}`;
  } else {
    const lastAuthorIndex = authors.length - 1;
    const otherAuthors = authors
      .slice(0, lastAuthorIndex)
      .map((author) => author.nome)
      .join(", ");
    return `${otherAuthors} & ${authors[lastAuthorIndex].nome}`;
  }
}
