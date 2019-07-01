import { GET_PROGRAMS } from "../actions/types"

const initialState = {
    program: {},
    programs: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROGRAMS:
            return {
                ...state,
                programs: action.payload
            }
        default:
            return state;
    }
}