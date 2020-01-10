import { combineReducers } from 'redux'
import somethingReducer from './something/reducer'
import authReducer from './auth/reducer'
//INFO: import other reducers

import somethingSaga from './something/saga'
import authSaga from './auth/saga'
//INFO import other sagas

export const combinedReducers = combineReducers({
  //INFO: add reducers here
  authReducer,
  somethingReducer,
})

export const sagas = [authSaga, somethingSaga]
