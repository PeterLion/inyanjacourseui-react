import { GET_PROGRAMS, GET_PROGRAM, DELETE_PROGRAM, PUBLIC_GET_PROGRAMS } from "../actions/types"

const initialState = {
    program: {},
    programs: [],
    public_programs: []
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
        case PUBLIC_GET_PROGRAMS:
            {
                return {
                    ...state,
                    public_programs: action.payload
                }
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