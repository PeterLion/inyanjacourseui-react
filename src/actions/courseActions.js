import axios from "axios"
import { GET_COURSES, GET_ERRORS, SET_MESSAGE, PUBLIC_GET_COURSES, GET_NEW_COURSES, GET_FEATURED_COURSES, GET_COURSE } from "./types"
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

export const getCourse = (course_id, history) => async dispatch => {
    try {
        const res = await axios.get(COURSE_API_URL + `/api/v1/public/courses/course/${course_id}`)
        dispatch({
            type: GET_COURSE,
            payload: res.data
        })
    } catch (error) {
        history.push("/")
    }
}

export const getNewCourses = () => async dispatch => {
    const res = await axios.get(COURSE_API_URL + "/api/v1/public/courses/newCourses")
    dispatch({
        type: GET_NEW_COURSES,
        payload: res.data
    })
}

export const getFeaturedCourses = () => async dispatch => {
    const res = await axios.get(COURSE_API_URL + "/api/v1/public/courses/featuredCourses")
    dispatch({
        type: GET_FEATURED_COURSES,
        payload: res.data
    })
}


export const getPublicCourses = () => async dispatch => {
    const res = await axios.get(COURSE_API_URL + "/api/v1/public/courses")
    dispatch({
        type: PUBLIC_GET_COURSES,
        payload: res.data
    })
}
