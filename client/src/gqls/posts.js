import gql from 'graphql-tag';

export const GET_GRAFTS = gql`{
  drafts {
    id
    title
    published
    author {
      name
    }
  }
}`;
export const CREATE_DRAFT = gql`
  mutation CreateDraft($input: CreatePostInput!) {
    createDraft(input: $input) {
      id
      title
    }
  }
`;
export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
