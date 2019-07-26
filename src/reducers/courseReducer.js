import { GET_COURSES, PUBLIC_GET_COURSES } from "../actions/types"

const initialState = {
    course: {},
    courses: [],
    public_courses: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case PUBLIC_GET_COURSES:
            return {
                ...state,
                public_courses: action.payload
            }
        default:
            return state;
    }
}