import initial from "../../api/tasks_api";
import actionsType from "../actionsType";

const tasks = (state = initial, action) => {
  switch (action.type) {
    case actionsType.CHANGE_BOARD : 
    const newState = [...state];
    newState.forEach((element,key) => {
      if(key===action.payload.index) element.selected=true;
      else element.selected=false;
    }); 
    return newState;
    default:
      return state;
  }
};

export default tasks;
