export const ActionType = {
  PLACE: "PLACE",
};

export const place = (stepNumber, xIsNext) => ({
  type: ActionType.PLACE,
  stepNumber,
  xIsNext,
});
