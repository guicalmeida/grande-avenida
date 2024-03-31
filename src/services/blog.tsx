import { gql } from "graphql-request";
import graphqlClient from "./client";
import { BlogPost } from "@/models/blogPost.model";

export function blogsQuery(blogSlug?: string) {
  return gql`
    query Blogs {
        ${blogSlug ? `blog(where: {slug: "${blogSlug}"})` : "blogs(orderBy: publishedAt_DESC)"} {
        autores {
          id
          nome
          sobre {
            html
          }
          perfil {
            id
            height
            url(transformation: {document: {output: {format: webp}}})
            width
          }
        }
        capa {
          height
          id
          url(transformation: {document: {output: {format: webp}}})
          width
        }
        corpo {
          colunaDupla
          comMargem
          conteudo {
            ... on Imagem {
              id
              legenda
              imagem {
                id
                height
                width
                url(transformation: {document: {output: {format: webp}}})
              }
            }
            ... on Vazio {
              id
              espacoVazio
            }
            ... on Texto {
              id
              texto {
                html
              }
            }
          }
          id
        }
        id
        publishedAt
        resumo
        slug
        titulo
      }
    }
  `;
}

export async function getBlog(blogSlug: string) {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 300);
  }).then(() => {
    console.count("entrou"); return graphqlClient.request<{ blog: BlogPost }>(blogsQuery(blogSlug));
  });
  return res.blog;
}

export async function getBlogs() {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 300);
  }).then(() => {
    console.count("entrou"); return graphqlClient.request<{ blogs: BlogPost[] }>(blogsQuery());
  });
  return res.blogs;
}
