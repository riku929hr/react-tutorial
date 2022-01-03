export const ActionType = {
  PLACE: "PLACE",
  JUMPTO: "JUMPTO",
};

export const place = (toWhere) => ({
  type: ActionType.PLACE,
  toWhere,
});

export const jumpTo = (move) => ({
  type: ActionType.JUMPTO,
  move,
});
