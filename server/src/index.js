import { ApolloServer } from 'apollo-server-lambda';
import { schema } from './schema';

export const graphql = new ApolloServer({
  schema
}).createHandler({ cors: { origin: true } });
