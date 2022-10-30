import actionsType from "../actionsType";

const initial = "sun";

const mode = (state = initial, action) => {
  if (action.type === actionsType.TOGGLE_MODE) return action.payload.mode;
  else {return state}

};

export default mode;
