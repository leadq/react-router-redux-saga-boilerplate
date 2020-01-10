import { call, put, takeLatest } from 'redux-saga/effects'
import types from './action-types'
import { successLogin, failLogin, loggedOut } from './actions'
import API from './api'

const setTokenToLocalStorage = (token, expireTime) => {
  localStorage.setItem('app_token', token)
  localStorage.setItem('expire_time', expireTime)
}

const removeTokenFromLocalStorage = () => {
  localStorage.removeItem('app_token')
  localStorage.removeItem('expire_time')
}

function* requestLogin({ username, password }) {
  try {
    const { token, expireTime } = yield call(API.fetchLogin, username, password)
    console.log('login_response', { token, expireTime })
    yield put(successLogin())
    yield setTokenToLocalStorage(token, expireTime)
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failLogin(error))
  }
}

function* logout({ token }) {
  try {
    const { status } = yield call(API.fetchLogout, token)
    console.log('LOGOUT_STATUS: ', status)
    yield put(loggedOut())
    removeTokenFromLocalStorage()
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failLogin(error))
  }
}

function* checkAuthentication({ token }) {
  try {
    const response = yield call(API.checkAuthentication, token)
    //Other sideeffects here
    console.log('Still Authenticated until: ', response.expireTime)
  } catch (error) {
    removeTokenFromLocalStorage()
    console.error('ERROR:', error)
  }
}

export default function* authSaga() {
  yield takeLatest(types.REQUEST_LOGIN, requestLogin)
  yield takeLatest(types.CHECK_AUTHENTICATION, checkAuthentication)
  yield takeLatest(types.LOGOUT, logout)
}
