import React from "react";
import { connect } from "react-redux";
import { jumpTo } from "../actions";

const GameHistory = ({ history, jumpTo }) => {
  return (
    <ol>
      {history.map((step, move) => (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
            {move ? "Go to move #" + move : "Go to game start"}
          </button>
        </li>
      ))}
    </ol>
  );
};

const mapStateToProps = (state) => ({
  history: state.history,
});

export default connect(mapStateToProps, { jumpTo })(GameHistory);
