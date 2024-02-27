import { gql } from "graphql-request";
import graphqlClient from "./client";
import { Course } from "@/models/course.model";

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
          url
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
            url
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
  const res = await graphqlClient.request<{ curso: Course }>(
    cursosQuery(courseSlug)
  );
  return res.curso;
}

export async function getCursos() {
  const res = await graphqlClient.request<{ cursos: Course[] }>(cursosQuery());
  return res.cursos;
}
