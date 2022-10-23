
import { createStore } from "redux";
import nightModeReducer from "./reducer/nightModeReducer";

const store = createStore(nightModeReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
