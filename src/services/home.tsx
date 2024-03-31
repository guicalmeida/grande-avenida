import { gql } from "graphql-request";
import graphqlClient from "./client";
import { Home } from "@/models/home.model";

const homeQuery = gql`
  query Home {
    blogs(orderBy: publishedAt_DESC) {
      capa {
        height
        url(transformation: { document: { output: { format: webp } } })
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
        url(transformation: { document: { output: { format: webp } } })
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
        url(transformation: { document: { output: { format: webp } } })
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
        url(transformation: { document: { output: { format: webp } } })
      }
      url
    }
  }
`;

export async function getHome() {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 300);
  }).then(() => {
    console.count("entrou"); return graphqlClient.request<Home>(homeQuery);
  });
  return res;
}
