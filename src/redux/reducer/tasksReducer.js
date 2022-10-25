import initial from "../../api/tasks_api";
import actionsType from "../actionsType";

const changeBoadrSelected = (state, index) => {
  const newState = [...state];
  newState.forEach((element, key) => {
    if (key === index) element.selected = true;
    else element.selected = false;
  });
  return newState;
};

const checkSubtask = (currentState, columnId, taskId, subtaskId) => {
  const newState = [...currentState];
  const prevSubtaskCheck = newState.find((val) => val.selected === true)
    .columns[columnId].tasks[taskId].subtasks[subtaskId].checked;
  newState.find((val) => val.selected === true).columns[columnId].tasks[
    taskId
  ].subtasks[subtaskId].checked = !prevSubtaskCheck;
  //console.log(!prevSubtaskCheck);
  return newState;
};

const tasks = (state = initial, action) => {
  switch (action.type) {
    case actionsType.CHANGE_BOARD:
      return changeBoadrSelected(state, action.payload.index);
    case actionsType.CHECK_SUBTASK:
      const columnId = action.payload.columnId;
      const taskId = action.payload.taskId;
      const subtaskId = action.payload.subtaskId;

      return checkSubtask(state, columnId, taskId, subtaskId);
    default:
      return state;
  }
};

export default tasks;
