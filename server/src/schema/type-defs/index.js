import { values } from 'lodash/fp';
import * as inputs from './inputs';
import * as queries from './queries';
import * as types from './types';
import schema from './schema.gql';

export const typeDefs = [
  ...values(inputs),
  ...values(queries),
  ...values(types),
  schema
];
