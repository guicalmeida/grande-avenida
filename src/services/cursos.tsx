import { gql } from "graphql-request";

const cursosQuery = gql`
  query Cursos {
    cursos {
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

export default cursosQuery;
