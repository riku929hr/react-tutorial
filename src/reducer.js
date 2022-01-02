import { ActionType } from "./actions";

export const initialState = { stepNumber: 0, xIsNext: true };

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PLACE:
      return {
        ...state,
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext,
      };
    default:
      return state;
  }
};
