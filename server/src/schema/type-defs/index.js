import { gql } from 'apollo-server-lambda';
import { values } from 'lodash/fp';
import * as queries from './queries';

const schema = gql`
  schema {
    query: Query
  }
`;

export const typeDefs = [...values(queries), schema];
