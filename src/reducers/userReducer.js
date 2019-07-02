import { SET_USER } from "../actions/types"

const initialState = {
    validToken: false,
    user: {}
}

const tokenIsThere = payload => {
    if (payload) {
        return true
    }
    return false;
}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                validToken: tokenIsThere(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}