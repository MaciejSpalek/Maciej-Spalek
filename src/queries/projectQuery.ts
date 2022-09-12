import { gql } from "@apollo/client";

export const GET_PROJECTS_QUERY = gql`
  query GetProjectsQuery {
    projects {
      data {
        id
        attributes {
          description
          title
          createdAt
          posts {
            data {
              id
              attributes {
                title
                description
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
          createdAt
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
