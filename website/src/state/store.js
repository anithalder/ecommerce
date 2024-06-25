import { legacy_createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { thunk } from 'redux-thunk'
import { authReducer } from './Auth/Reducer'

const rootReducer = combineReducers({
    auth: authReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk))

export default store