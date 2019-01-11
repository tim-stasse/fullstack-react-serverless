import { ApolloServer } from 'apollo-server-lambda';
import { JsonPlaceholder } from '_data-sources';
import { schema } from '_schema';
import { verifyToken } from './authentication';

const dataSources = () => ({
  jsonPlaceholder: new JsonPlaceholder()
});

export const graphql = async (event, context, callback) => {
  const token = await verifyToken(event.headers.Authorization);

  const server = new ApolloServer({
    dataSources,
    schema,
    context: {
      token
    }
  });

  return server.createHandler({ cors: { origin: true } })(
    event,
    context,
    callback
  );
};
