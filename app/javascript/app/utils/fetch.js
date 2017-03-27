import isomorphicFetch from 'isomorphic-fetch'
import { Deserializer } from 'jsonapi-serializer'

function deserializeResponse(json) {
  if (json !== null && json !== undefined) {
    return new Deserializer({ keyForAttribute: 'camelCase', typeAsAttribute: true }).deserialize(json)
  }
  return {}
}

function ensureSuccessful(res) {
  if (res.status >= 200 && res.status < 300) {
    return res
  }
  const error = new Error(res.statusText)
  error.res = res
  throw error
}

function parseJSON(res) {
  if (res.status !== 204) {
    return res.json()
  }
  return null
}


export function fetchJson(url, { method = '', headers = {}, body = {} }, dispatch) { // eslint-disable-line no-shadow
  let paramsArray = [url, { method, headers, body }, dispatch]
  if (method === 'GET' || method === 'HEAD') {
    paramsArray = [url, { method, headers }, dispatch]
  }
  return isomorphicFetch(...paramsArray)
    .then(ensureSuccessful)
    .then(parseJSON)
    .catch((err) => {
      console.log(err)
    })
}

export function fetch(url, { method = '', headers = {}, body = {} }, dispatch) { // eslint-disable-line no-shadow
  return fetchJson(url, { method, headers, body }, dispatch)
    .then(json => deserializeResponse(json))
}


export function headers(includeContentType = true) {
  const headersObject = {
    Accept: 'application/vnd.api+json',
    'Accept-Language': 'en-US',
  }
  if (includeContentType) {
    headersObject['Content-Type'] = 'application/json'
  }
  return headersObject
}
