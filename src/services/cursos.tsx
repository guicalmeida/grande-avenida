import { gql } from "graphql-request";
import graphqlClient from "./client";
import { Course } from "@/models/course.model";
import { avoidRateLimit } from "@/utils/avoidRateLimit";

export function cursosQuery(courseSlug?: string) {
  return gql`
    query Cursos {
      ${courseSlug ? `curso(where: {slug: "${courseSlug}"})` : "cursos"} {
        slug
        linkDeInscricao
        capa {
          id
          height
          width
          url(transformation: {document: {output: {format: webp}}})
        }
        corpo {
          html
        }
        fim
        createdAt
        formatoDaAula
        id
        inicio
        professores {
          id
          nome
          perfil {
            id
            url(transformation: {document: {output: {format: webp}}})
            width
            height
          }
          sobre {
            html
          }
        }
        titulo
        statusDeInscricao
        valor
      }
    }
  `;
}

export async function getCurso(courseSlug: string) {
  const res = await avoidRateLimit().then(() => {
    console.count("entrou");
    return graphqlClient.request<{ curso: Course }>(cursosQuery(courseSlug));
  });
  return res.curso;
}

export async function getCursos() {
  const res = await avoidRateLimit().then(() => {
    console.count("entrou");
    return graphqlClient.request<{ cursos: Course[] }>(cursosQuery());
  });
  return res.cursos;
}
