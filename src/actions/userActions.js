import axios from "axios"
import { GET_ERRORS, SET_USER } from "./types"
import jwt_decode from "jwt-decode"
import setJwtToken from "../utils/user/setJwtToken"
import { COURSE_API_URL } from "../utils/constantVariables"


export const createUser = (user, history) => async dispatch => {
    try {
        await axios.post(COURSE_API_URL + "/api/v1/users/create", user)
        history.push("/login")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const login = LoginRequest => async dispatch => {
    try {
        const res = await axios.post(COURSE_API_URL + "/api/v1/users/login", LoginRequest)
        const { token } = res.data
        localStorage.setItem("jwtToken", token)
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}
