export const ActionType = {
  PLACE: "PLACE",
  JUMPTO: "JUMPTO",
};

export const place = () => ({
  type: ActionType.PLACE,
});

export const jumpTo = (move) => ({
  type: ActionType.JUMPTO,
  move,
});
