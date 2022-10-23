import actionsType from "./actionsType";

export const toggleMode = (mode) => {
    return {
        type: actionsType.TOGGLE_MODE,
        payload: {mode}
    }
};
