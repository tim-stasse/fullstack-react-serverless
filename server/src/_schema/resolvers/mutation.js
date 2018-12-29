import { flow, identity, over } from 'lodash/fp';
import { pascalCase } from '_utils';

const resolvers = flow(
  over([identity, pascalCase]),
  ([resource, pascal]) => ({
    [`put${pascal}`]: (_, args, context) =>
      args[resource].id
        ? context.dataSources.jsonPlaceholder.resources[resource].update(
            args[resource].id,
            args[resource]
          )
        : context.dataSources.jsonPlaceholder.resources[resource].create(
            args[resource]
          ),
    [`delete${pascal}`]: (_, { id }, context) =>
      context.dataSources.jsonPlaceholder.resources[resource].delete(id)
  })
);

export const mutation = {
  ...resolvers('album'),
  ...resolvers('comment'),
  ...resolvers('photo'),
  ...resolvers('post'),
  ...resolvers('todo'),
  ...resolvers('user')
};
