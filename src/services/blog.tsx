import { gql } from "graphql-request";
import graphqlClient from "./client";
import { BlogPost } from "@/models/blogPost.model";

export function blogsQuery(blogSlug?: string) {
  return gql`
    query Blogs {
        ${blogSlug ? `blog(where: {slug: "${blogSlug}"})` : "blogs"} {
        autores {
          id
          nome
          sobre {
            html
          }
          perfil {
            id
            height
            url
            width
          }
        }
        capa {
          height
          id
          url
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
                url
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
  const res = await graphqlClient.request<{ blog: BlogPost }>(
    blogsQuery(blogSlug)
  );
  return res.blog;
}

export async function getBlogs() {
  const res = await graphqlClient.request<{ blogs: BlogPost[] }>(blogsQuery());
  return res.blogs;
}
