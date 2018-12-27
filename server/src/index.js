import { ApolloServer } from 'apollo-server-lambda';
import { JsonPlaceholder } from '_data-sources';
import { schema } from '_schema';

export const graphql = new ApolloServer({
  dataSources: () => ({
    jsonPlaceholder: new JsonPlaceholder()
  }),
  schema
}).createHandler({ cors: { origin: true } });
