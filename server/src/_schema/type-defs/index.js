import { values } from 'lodash/fp';
import * as inputs from './inputs';
import * as types from './types';
import mutation from './mutation.gql';
import query from './query.gql';
import schema from './schema.gql';

export const typeDefs = [
  ...values(inputs),
  ...values(types),
  mutation,
  query,
  schema
];
