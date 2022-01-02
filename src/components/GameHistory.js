const GameHistory = (history) => {
  return (
    <ol>
      {history.map((step, move) => (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            {move ? "Go to move #" + move : "Go to game start"}
          </button>
        </li>
      ))}
    </ol>
  );
};
