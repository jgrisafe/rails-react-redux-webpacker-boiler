import { assoc } from 'ramda'
import { TEST } from '../constants'

const initialState = { test: 'test' }

export default function currentUser(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case TEST:
      return assoc('test', payload.test, state)
    default:
      return state
  }
}