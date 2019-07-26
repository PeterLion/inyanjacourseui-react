import { GET_TOPICS, GET_TOPIC, PUBLIC_GET_TOPICS } from "../actions/types"

const initialState = {
    topic: {},
    topics: [],
    public_topics: []
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
        case PUBLIC_GET_TOPICS:
            return {
                ...state,
                public_topics: action.payload
            }
        default:
            return state;
    }
}