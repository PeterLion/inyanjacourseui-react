import { GET_TOPICS, GET_TOPIC } from "../actions/types"

const initialState = {
    topic: {},
    topics: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOPICS:
            return {
                ...state,
                topics: action.payload
            }
        case GET_TOPIC:
            return {
                ...state,
                topic: action.payload
            }
        default:
            return state;
    }
}