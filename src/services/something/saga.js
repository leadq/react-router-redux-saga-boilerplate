import { call, put, takeLatest } from 'redux-saga/effects'
import types from './action-types'
import { successGetSomething, failGetSomething } from './actions'
import API from './api'

export function* getSomething() {
  try {
    const something = yield call(API.fetchSomething, 'param1', 'param2')
    yield put(successGetSomething(something))
    console.log('something', something)
  } catch (error) {
    console.error('ERROR:', error)
    yield put(failGetSomething(error))
  }
}

export default function* somethingSaga() {
  yield takeLatest(types.REQUEST_GET_SOMETHING, getSomething)
}
