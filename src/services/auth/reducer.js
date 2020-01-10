import types from '../auth/action-types'

const initialState = {
  isAuthenticated: !!localStorage.getItem('app_token'),
  expireTime: undefined,
  loggingIn: false,
  loggingOut: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_LOGIN:
      return {
        ...state,
        loggingIn: true,
      }
    case types.SUCCESS_LOGIN:
      return {
        ...state,
        loggingIn: false,
        isAuthenticated: true,
      }
    case types.FAIL_LOGIN:
      return {
        ...state,
        loggingIn: false,
      }
    case types.LOGOUT:
      return {
        ...state,
        loggingOut: true,
      }
    case types.LOGGED_OUT:
      return {
        state: { ...initialState },
      }

    default:
      return state
  }
}
