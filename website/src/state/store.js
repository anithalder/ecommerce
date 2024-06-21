import * as redux from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './Auth/Reducer'

const rootReducer = redux.combineReducers({
    auth: authReducer
})

const store = redux.legacy_createStore(rootReducer, redux.applyMiddleware(thunk))

export default store