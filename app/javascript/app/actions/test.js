import { fetch, headers } from '../utils/fetch'
import { TEST } from '../constants'

/* ACTIONS
 ===============================================*/
export default function main(videoId, newComment) {
  return {
    type: TEST
  }
}

/* REQUEST HELPERS
===============================================*/
function getTestData() {
  return dispatch => fetch(
    '/api/v1/test',
    {
      method: 'GET',
      headers: headers(),
    }, 
    dispatch
  )
}