import React from "react";
import { connect } from "react-redux";

const GameStatus = ({ winner, xIsNext }) => (
  <div>
    {winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O")}
  </div>
);

const mapStateToProps = (state) => ({ xIsNext: state.xIsNext });

export default connect(mapStateToProps)(GameStatus);
