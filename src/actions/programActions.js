import axios from "axios"
import { GET_PROGRAMS, GET_ERRORS, GET_PROGRAM, DELETE_PROGRAM, SET_MESSAGE } from "./types"
import { COURSE_API_URL } from "../utils/constantVariables"

export const createProgram = (project, history) => async dispatch => {
    try {
        await axios.post(COURSE_API_URL + "/api/v1/programs/create", project)
        history.push("/dashboard")
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
        dispatch({
            type: SET_MESSAGE,
            payload: { message: "Project Created" }
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getPrograms = () => async dispatch => {
    const res = await axios.get(COURSE_API_URL + "/api/v1/programs")
    dispatch({
        type: GET_PROGRAMS,
        payload: res.data
    })
}

export const getProgram = (id, history) => async dispatch => {
    try {
        const res = await axios.get(COURSE_API_URL + `/api/v1/programs/program/${id}`)
        dispatch({
            type: GET_PROGRAM,
            payload: res.data
        })
    } catch (error) {
        history.push("/dashboard")
    }
}

export const updateProgram = (id, program, history) => async dispatch => {
    try {
        await axios.put(COURSE_API_URL + `/api/v1/programs/${id}/update`, program)
        history.push("/dashboard")
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

export const deleteProgram = id => async dispatch => {
    if (window.confirm("This program will be deleted permanently!")) {
        axios.delete(COURSE_API_URL + `/api/v1/programs/${id}/delete`)
        dispatch({
            type: DELETE_PROGRAM,
            payload: id
        })
    }

}