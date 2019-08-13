import { GET_COURSES, PUBLIC_GET_COURSES, GET_NEW_COURSES, GET_FEATURED_COURSES, GET_COURSE } from "../actions/types"

const initialState = {
    course: {},
    courses: [],
    new_courses: [],
    featured_courses: [],
    public_courses: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_COURSE:
            return {
                ...state,
                course: action.payload
            }
        case GET_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case GET_NEW_COURSES:
            return {
                ...state,
                new_courses: action.payload
            }
        case GET_FEATURED_COURSES:
            return {
                ...state,
                featured_courses: action.payload
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