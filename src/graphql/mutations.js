import { gql } from "@apollo/client";

export const ADD_COMMENT = gql`
  mutation ($postId: ID!, $name: String!, $email: String!, $body: String!) {
    createComment(
      input: {
        postId: $postId
        name: $name
        email: $email
        body: $body
      }
    ) {
      id
      name
      body
    }
  }
`;
