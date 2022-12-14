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
  return newState;
};

const changeColumn = (state, taskId, currentColumn, goalColumn) => {
  const newState = [...state];
  const task = newState.find((val) => val.selected === true).columns[
    currentColumn
  ].tasks[taskId];
  newState
    .find((val) => val.selected === true)
    .columns[currentColumn].tasks.splice(taskId, 1);
  newState
    .find((val) => val.selected === true)
    .columns[goalColumn].tasks.push(task);
  return newState;
};

const tasks = (state = initial, action) => {
  const newState = [...state];
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
      return changeColumn(
        state,
        action.payload.taskId,
        currentColumn,
        goalColumn
      );

    case actionsType.ADD_BOARD:
      newState.forEach((val) => (val.selected = false));
      return [
        ...newState,
        { boardName: action.payload.boardName, selected: true, columns: [] },
      ];
    case actionsType.ADD_COLUMN:
      newState
        .find((val) => val.selected === true)
        .columns.push({ columnName: action.payload.columnName, tasks: [] });
      return newState;
    case actionsType.ADD_TASK:
      const { title, description, subtasks, status } = action.payload.formInfo;
      const subtask = subtasks.map(val=>{return{subtasksName:val}});
      newState
        .find((val) => val.selected === true)
        .columns[Number(status)].tasks.push({
          tasksName: title,
          description,
          subtasks:subtask,
        });
      return newState;

    default:
      return state;
  }
};

export default tasks;
