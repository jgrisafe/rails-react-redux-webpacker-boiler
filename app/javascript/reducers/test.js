


const initialState = { test: 'test' }

export default function currentUser(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}