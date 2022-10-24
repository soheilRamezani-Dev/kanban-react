import { combineReducers } from "redux";
import mode from "./nightModeReducer";
import tasks from "./tasksReducer";


const Reducer = combineReducers({mode,tasks})

export default Reducer