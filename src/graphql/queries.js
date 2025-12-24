import { gql } from "@apollo/client";


export const GET_POSTS = gql`
  query {
    posts(options: { paginate: { page: 1, limit: 5 } }) {
      data {
        id
        title
      }
    }
  }
`;


export const GET_POST = gql`
  query ($id: ID!) {
    post(id: $id) {
      id
      title
      body
      comments {
        data {
          id
          name
          body
        }
      }
    }
  }
`;
