import { flow, identity, over } from 'lodash/fp';
import { requiresAuthentication } from '_common';
import { pascalCase, then } from '_utils';

const resolvers = flow(
  over([identity, pascalCase]),
  ([resource, pascal]) => ({
    [`create${pascal}`]: requiresAuthentication((_, args, context) =>
      context.dataSources.jsonPlaceholder.resources[resource].create(args)
    ),
    [`update${pascal}`]: requiresAuthentication((_, args, context) =>
      context.dataSources.jsonPlaceholder.resources[resource].update(
        args.id,
        args
      )
    ),
    [`delete${pascal}`]: requiresAuthentication(
      flow(
        (_, { id }, context) =>
          Promise.all([
            context.dataSources.jsonPlaceholder.resources[resource].getById(id),
            context.dataSources.jsonPlaceholder.resources[resource].delete(id)
          ]),
        then(([_]) => _)
      )
    )
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
