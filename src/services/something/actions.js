import types from './action-types'

export const requestGetSomething = () => {
  return {
    type: types.REQUEST_GET_SOMETHING,
  }
}

export const successGetSomething = (something) => {
  return {
    type: types.SUCCESS_GET_SOMETHING,
    something,
  }
}

export const failGetSomething = (err) => {
  return {
    type: types.FAIL_GET_SOMETHING,
    err,
  }
}
