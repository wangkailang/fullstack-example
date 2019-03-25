import gql from 'graphql-tag';

const SIGNUP = gql`
  mutation Signup($input: SignUpInput!) {
    signup(input: $input) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export default SIGNUP;