import axios from "axios"
import { GET_ERRORS, SET_MESSAGE, GET_TOPICS, GET_TOPIC } from "./types"
import { COURSE_API_URL } from "../utils/constantVariables"

export const createTopic = (id, Topic, history) => async dispatch => {
    try {
        await axios.post(COURSE_API_URL + `/api/v1/topics/${id}/create`, Topic)
        history.push(`/program/${id}`)
        dispatch({
            type: SET_MESSAGE,
            payload: { message: "Topic Created" }
        })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getTopics = () => async dispatch => {
    const res = await axios.get(COURSE_API_URL + "/api/v1/topics")
    dispatch({
        type: GET_TOPICS,
        payload: res.data
    })
}

export const getTopic = (id, history) => async dispatch => {
    try {
        const res = await axios.get(COURSE_API_URL + `/api/v1/topics/topic/${id}`)
        dispatch({
            type: GET_TOPIC,
            payload: res.data
        })
    } catch (error) {
        history.push("/dashboard")
    }
}
