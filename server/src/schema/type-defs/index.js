import { values } from 'lodash/fp';
import * as queries from './queries';
import schema from './schema.gql';

export const typeDefs = [...values(queries), schema];
