import types from './action-types'

const token = localStorage.getItem('app-token')

export const requestLogin = (username, password) => {
  return {
    type: types.REQUEST_LOGIN,
    username,
    password,
  }
}

export const successLogin = () => {
  return {
    type: types.SUCCESS_LOGIN,
  }
}

export const failLogin = () => {
  return {
    type: types.FAIL_LOGIN,
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT,
    token,
  }
}

export const loggedOut = () => {
  return {
    type: types.LOGGED_OUT,
  }
}

export const authenticated = () => {
  return {
    type: types.AUTHENTICATED,
  }
}

export const checkAuthentication = () => {
  return {
    type: types.CHECK_AUTHENTICATION,
    token,
  }
}
