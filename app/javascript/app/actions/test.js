import { fetch, headers } from '../utils/fetch'
import { TEST } from '../constants'

/* ACTIONS
 ===============================================*/
function reduceTestData(data) {
  console.log(data) // eslint-disable-line no-console
  return {
    type: TEST,
    payload: data,
  }
}

/* REQUEST HELPERS
===============================================*/
function requestTestData(dispatch) {
  return fetch(
    '/api/v1/test',
    {
      method: 'GET',
      headers: headers(),
    },
    dispatch
  )
}

/* RESULT HELPERS
===============================================*/
function receiveTestData(json) {
  return dispatch => dispatch(reduceTestData(json))
}

/* EXPORTS
===============================================*/
export default function getTestData() {
  return dispatch => (
    requestTestData(dispatch)
      .then(json => dispatch(receiveTestData(json)))
      .catch(err => console.log(err)) // eslint-disable-line no-console)
  )
}
