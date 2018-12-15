// @flow
import { gql } from 'apollo-server-lambda';

export const query = gql`
  type Query {
    helloWorld: String!
  }
`;
