import { assignAll, filter, flow, identity, join, over } from 'lodash/fp';

export const query = {
  user: (_, { id }, context) =>
    context.dataSources.jsonPlaceholder.user.getById(id),
  users: (_, args, context) =>
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
      context.dataSources.jsonPlaceholder.user.list
    )(args)
};
