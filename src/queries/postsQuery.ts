import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  query GetPostsQuery($type: String) {
    posts(
      sort: "date:desc"
      pagination: { limit: 100 }
      filters: { type: { eq: $type } }
    ) {
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
`;

export const GET_NEWEST_POSTS_QUERY = gql`
  query GetPostsQuery($type: String) {
    posts(
      sort: "date:desc"
      pagination: { limit: 6 }
      filters: { type: { eq: $type } }
    ) {
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
`;

export const GET_POST_QUERY = gql`
  query GetPostQuery($id: ID!) {
    post(id: $id) {
      data {
        id
        attributes {
          title
          description
          createdAt
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
