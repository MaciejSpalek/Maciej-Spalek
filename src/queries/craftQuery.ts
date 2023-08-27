import { gql } from "@apollo/client";

export const GET_CRAFT_QUERY = gql`
  query GetCraftQuery($id: ID!) {
    craft(id: $id) {
      data {
        id
        attributes {
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
          posts {
            data {
              id
              attributes {
                description
                state
                type
                price
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
      }
    }
  }
`;


