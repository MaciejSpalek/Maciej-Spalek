import { gql } from "@apollo/client";

export const GET_PROJECTS_QUERY = gql`
  query GetProjectsQuery {
    projects {
      data {
        id
        attributes {
          description
          title
          date
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

export const GET_PROJECT_QUERY = gql`
  query GetProjectQuery($id: ID!) {
    project(id: $id) {
      data {
        id
        attributes {
          description
          date
          title
          posts {
            data {
              id
              attributes {
                title
                description
                date
                type
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

// export const GET_CRAFT_QUERY = gql`
//   query GetQuery($type: String) {
//     craft( filters: { type: { eq: $type } }) {
//       data {
//         id
//         attributes {
//           title
//           image {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           posts {
//             data {
//               id
//               attributes {
//                 title
//                 image {
//                   data {
//                     attributes {
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

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
                title
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


