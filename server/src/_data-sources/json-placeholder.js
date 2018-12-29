import { constant, flow, getOr, size } from 'lodash/fp';
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

  fetch = (method, url, init) =>
    fetch(`${this.baseUrl}/${url}`, { ...init, method });

  fetchJson = (method, url, body, init) =>
    this.fetch(method, url, {
      ...init,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...getOr({}, 'headers', init)
      }
    });

  get = (url, init) => this.fetch('GET', url, init);
  delete = (url, init) => this.fetch('DELETE', url, init);

  post = (url, body, init) => this.fetchJson('POST', url, body, init);
  put = (url, body, init) => this.fetchJson('PUT', url, body, init);

  user = {
    create: flow(
      user => this.post('users', user),
      then(this.jsonResponse(null))
    ),
    delete: id => this.delete(`users/${id}`).then(response => response.ok),
    getById: flow(
      id => this.get(`users/${id}`),
      then(this.jsonResponse(null))
    ),
    list: flow(
      this.withQueryString('users'),
      this.get,
      then(this.jsonResponse([]))
    ),
    update: flow(
      (id, user) => this.put(`users/${id}`, user),
      then(this.jsonResponse(null))
    )
  };
}
