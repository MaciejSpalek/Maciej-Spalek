import { gql } from "@apollo/client";

export const GET_SECTIONS_QUERY = gql`
  query GetSectionsQuery {
    sections {
      data {
        id
        attributes {
          title
          href
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
