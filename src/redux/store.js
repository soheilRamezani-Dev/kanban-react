
import { createStore } from "redux";
import Reducer from "./reducer/reducer";
const store = createStore(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

export default store;
