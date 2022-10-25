import actionsType from "./actionsType";

export const toggleMode = (mode) => {
  return {
    type: actionsType.TOGGLE_MODE,
    payload: { mode },
  };
};
export const changeBoard = (index) => {
  return {
    type: actionsType.CHANGE_BOARD,
    payload: { index },
  };
};
export const checkSubtask = (columnId,taskId,subtaskId) => {
  return {
    type: actionsType.CHECK_SUBTASK,
    payload: { columnId,taskId,subtaskId },
  };
};
