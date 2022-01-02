import React from "react";
import { connect } from "react-redux";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import { place, jumpTo } from "./actions";

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
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? "X" : "O";

    this.props.place();

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
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
          <GameStatus winner={winner} />
          <ol>
            {history.map((step, move) => (
              <li key={move}>
                <button onClick={() => this.props.jumpTo(move)}>
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

export default connect(mapStateToProps, { place, jumpTo })(Game);
