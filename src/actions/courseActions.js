import axios from "axios"
import { GET_COURSES, GET_ERRORS, SET_MESSAGE } from "./types"
import { COURSE_API_URL } from "../utils/constantVariables"

export const createCourse = (id, Course, history) => async dispatch => {
    try {
        await axios.post(COURSE_API_URL + `/api/v1/courses/${id}/create`, Course)
        history.push(`/topics/${id}`)
        dispatch({
            type: GET_ERRORS,
            payload: {}
        })
        dispatch({
            type: SET_MESSAGE,
            payload: { message: "Course Created" }
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getCourses = () => async dispatch => {
    const res = await axios.get(COURSE_API_URL + "/api/v1/courses")
    dispatch({
        type: GET_COURSES,
        payload: res.data
    })
}
