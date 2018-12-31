import {
  assignAll,
  filter,
  flow,
  fromPairs,
  identity,
  join,
  map,
  over,
  size,
  toPairs
} from 'lodash/fp';
import { pascalCase, then } from '_utils';

const listResource = resource => (_, args, context) =>
  flow(
    over([
      ({ filter }) =>
        filter
          ? flow(
              toPairs,
              map(([key, value]) =>
                key === 'ids' ? ['id_like', join('|')(value)] : [key, value]
              ),
              fromPairs
            )(filter)
          : null,
      ({ page, perPage }) =>
        page && perPage
          ? {
              _start: (page - 1) * perPage,
              _end: page * perPage
            }
          : null,
      ({ sortField }) => (sortField ? { _sort: sortField } : null),
      ({ sortOrder }) => (sortOrder ? { _order: sortOrder } : null)
    ]),
    filter(identity),
    assignAll,
    context.dataSources.jsonPlaceholder.resources[resource].list
  )(args);

const resolvers = resource => ({
  [resource]: (_, { id }, context) =>
    context.dataSources.jsonPlaceholder.resources[resource].getById(id),
  [`all${pascalCase(resource)}s`]: listResource(resource),
  [`_all${pascalCase(resource)}sMeta`]: flow(
    listResource(resource),
    then(list => ({
      count: size(list)
    }))
  )
});

export const query = {
  ...resolvers('album'),
  ...resolvers('comment'),
  ...resolvers('photo'),
  ...resolvers('post'),
  ...resolvers('todo'),
  ...resolvers('user')
};
