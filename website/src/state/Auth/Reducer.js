import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./AuthType"

const initialState = {
    user: null,
    loading: false,
    error: null,
    jwt: null
}
export const authReducer = (state = initialState, action) => {
    if (action.type === REGISTER_REQUEST || action.type === LOGIN_REQUEST || action.type === GET_USER_REQUEST) {
        return {
            ...state,
            isLoading: true,
            error: null
        }
    }
    if (action.type === REGISTER_SUCCESS || action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            error: null,
            jwt: action.payload
            // user: action.payload
        }
    }
    if (action.type === GET_USER_SUCCESS) {
        return {
            ...state,
            user: action.payload,
            isLoading: false,
            error: null,
        }
    }
    if (action.type === REGISTER_FAILURE || action.type === LOGIN_FAILURE || action.type === GET_USER_FAILURE) {
        return {
            ...state,
            isLoading: false,
            error: action.payload
        }
    }
    if (action.type === LOGOUT) {
        return { ...initialState }
    }
    return state
}