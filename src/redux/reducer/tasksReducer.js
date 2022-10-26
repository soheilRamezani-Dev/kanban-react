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

const changeColumn = (state,taskId, currentColumn, goalColumn) => {
  const newState = [...state];
  const task = newState.find((val) => val.selected === true).columns[currentColumn].tasks[taskId];
  newState.find((val) => val.selected === true).columns[currentColumn].tasks.splice(taskId, 1);
  newState.find((val) => val.selected === true).columns[goalColumn].tasks.push(task);
  console.log(newState);
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
    case actionsType.CHANGE_COLUMN:
      const currentColumn = action.payload.currentColumn;
      const goalColumn = action.payload.goalColumn;
      return changeColumn(state,action.payload.taskId,currentColumn, goalColumn);

    case actionsType.ADD_BOARD:
      const newState = [...state];
      newState.forEach((val)=>val.selected=false);
      return [...newState,{boardName:action.payload.boardName,selected:true,columns:[]}]

    default:
      return state;
  }
};

export default tasks;
