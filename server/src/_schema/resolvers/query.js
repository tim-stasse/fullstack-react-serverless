import { assignAll, filter, flow, identity, join, over } from 'lodash/fp';
import queryString from 'query-string';
import fetch from 'node-fetch';

const withQueryString = url =>
  flow(
    over([
      ({ filter }) => (filter ? { id_like: join('|')(filter.idsLike) } : null),
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
    args =>
      args.length
        ? flow(
            assignAll,
            query => `${url}?${queryString.stringify(query)}`
          )(args)
        : url
  );

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const query = {
  user: (_, { id }) =>
    fetch(`${baseUrl}/users/${id}`).then(response =>
      response.ok ? response.json() : null
    ),
  users: (_, args) =>
    fetch(withQueryString(`${baseUrl}/users`)(args), {
      method: 'GET'
    }).then(response => (response.ok ? response.json() : []))
};
