import { constant, flow, size } from 'lodash/fp';
import queryString from 'query-string';
import fetch from 'node-fetch';
import { branchFuncs, then } from '_utils';

export class JsonPlaceholder {
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  jsonResponse = defaultValue => response =>
    response.ok ? response.json() : defaultValue;

  withQueryString = url =>
    branchFuncs(
      size,
      queryArgs => `${url}?${queryString.stringify(queryArgs)}`,
      constant(url)
    );

  get = (url, init) =>
    fetch(`${this.baseUrl}/${url}`, { ...init, method: 'GET' });

  user = {
    getById: flow(
      id => this.get(`users/${id}`),
      then(this.jsonResponse(null))
    ),
    list: flow(
      this.withQueryString('users'),
      this.get,
      then(this.jsonResponse([]))
    )
  };
}
