import { ActionType } from "./actions";

export const initialState = {
  stepNumber: 0,
  xIsNext: true,
  history: [{ squares: Array(9).fill(null) }],
};

const updateHistory = (state, toWhere) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();

  squares[toWhere] = state.xIsNext ? "X" : "O";

  return history.concat([
    {
      squares: squares,
    },
  ]);
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PLACE:
      return {
        ...state,
        history: updateHistory(state, action.toWhere),
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext,
      };
    case ActionType.JUMPTO:
      return {
        ...state,
        stepNumber: action.move,
        xIsNext: action.move % 2 === 0,
      };
    default:
      return state;
  }
};
