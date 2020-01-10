import types from './action-types'

const initialState = {
  something: undefined,
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SOMETHING:
      return {
        ...state,
        loading: true,
      }
    case types.SUCCESS_GET_SOMETHING:
      return {
        ...state,
        something: action.something,
        loading: false,
      }
    case types.FAIL_GET_SOMETHING:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
