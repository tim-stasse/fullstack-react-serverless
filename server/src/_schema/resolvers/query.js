import { assignAll, filter, flow, identity, join, over } from 'lodash/fp';

const resolvers = resource => ({
  [resource]: (_, { id }, context) =>
    context.dataSources.jsonPlaceholder.resources[resource].getById(id),
  [`${resource}s`]: (_, args, context) =>
    flow(
      over([
        ({ filter }) =>
          filter ? { id_like: join('|')(filter.idsLike) } : null,
        ({ pagination }) =>
          pagination
            ? {
                _start: (pagination.page - 1) * pagination.perPage,
                _end: pagination.page * pagination.perPage
              }
            : null,
        ({ sort }) => (sort ? { _sort: sort.field, _order: sort.order } : null)
      ]),
      filter(identity),
      assignAll,
      context.dataSources.jsonPlaceholder.resources[resource].list
    )(args)
});

export const query = {
  ...resolvers('album'),
  ...resolvers('comment'),
  ...resolvers('photo'),
  ...resolvers('post'),
  ...resolvers('todo'),
  ...resolvers('user')
};
