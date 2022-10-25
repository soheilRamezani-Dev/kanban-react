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
