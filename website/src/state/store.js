import * as redux from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './Auth/Reducer'

const rootReducer = redux.combineReducers({
    auth: authReducer
})

export const store = redux.legacy_createStore(rootReducer, redux.applyMiddleware(thunk))