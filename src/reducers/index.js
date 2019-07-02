import { combineReducers } from "redux"
import programReducer from "./programReducer"
import topicReducer from "./topicReducer";
import courseReducer from "./courseReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

export default combineReducers({
    errors: errorReducer,
    user: userReducer,
    program: programReducer,
    topic: topicReducer,
    course: courseReducer
})