import { GET_PROGRAMS, GET_PROGRAM, DELETE_PROGRAM } from "../actions/types"

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
        case GET_PROGRAM:
            return {
                ...state,
                program: action.payload
            }
        case DELETE_PROGRAM:
            return {
                ...state,
                programs: state.programs.filter(program => program.id !== action.payload)
            }
        default:
            return state;
    }
}