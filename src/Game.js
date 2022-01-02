import React from "react";
import { connect } from "react-redux";
import Board from "./components/Board";
import { place } from "./actions";

import { calculateWinner } from "./functions";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? "X" : "O";

    this.props.place(this.state.stepNumber, this.state.xIsNext);

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>
            {winner
              ? "Winner: " + winner
              : "Next player: " + (this.props.xIsNext ? "X" : "O")}
          </div>
          <ol>
            {history.map((step, move) => (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)}>
                  {move ? "Go to move #" + move : "Go to game start"}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
});

export default connect(mapStateToProps, { place })(Game);
