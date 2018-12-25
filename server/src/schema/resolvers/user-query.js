import { assignAll, filter, flow, identity, over } from 'lodash/fp';
import queryString from 'query-string';
import fetch from 'node-fetch';

const withQueryString = url =>
  flow(
    over([
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

export const userQuery = {
  list: (url, args) =>
    fetch(withQueryString(url)(args), {
      method: 'GET'
    }).then(response => response.json())
};
