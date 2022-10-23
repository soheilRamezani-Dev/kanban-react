import actionsType from "../actionsType";

const initial = { mode: "sun" };

const nightModeReducer = (state = initial, action) => {
  if (action.type === actionsType.TOGGLE_MODE) return {mode:action.payload.mode};
  else {return state}

};

export default nightModeReducer;
