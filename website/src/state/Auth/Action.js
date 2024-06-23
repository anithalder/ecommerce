import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from './AuthType'

const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign-up`, userData)
        const user = response.data
        if (user.jwt) {
            localStorage.setItem('jwt', user.jwt)
        }
        console.log(user)
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error))
    }
}

const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest())

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/sign-in`, userData)
        const user = response.data
        if (user.jwt) {
            localStorage.setItem('jwt', user.jwt)
        }
        console.log(user)
        dispatch(loginSuccess(user.jwt))
    } catch (error) {
        dispatch(loginFailure(error))
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = () => async (dispatch) => {
    dispatch(getUserRequest())
    const token = localStorage.getItem('jwt')
    try {
        const response = await axios.get(`${API_BASE_URL}/users/profile`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const user = response.data
        console.log(user)
        dispatch(getUserSuccess(user))
    } catch (error) {
        dispatch(getUserFailure(error))
    }
}

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT, payload: null })
    localStorage.removeItem('jwt')
}