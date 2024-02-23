import { gql } from "graphql-request";
import graphqlClient from "./client";
import { Home } from "@/models/home.model";

const homeQuery = gql`
  query Home {
    blogs(orderBy: publishedAt_ASC) {
      capa {
        height
        url
        width
        id
      }
      autores {
        nome
      }
      titulo
      slug
    }
    cursos {
      capa {
        height
        id
        url
        width
      }
      titulo
      slug
    }
    galerias {
      id
      imagem {
        height
        id
        url
        width
      }
      descricao
    }
    carrosseis {
      descricao
      id
      imagem {
        id
        height
        width
        url
      }
      url
    }
  }
`;

export async function getHome() {
  const res = await graphqlClient.request<Home>(homeQuery);
  return res;
}
