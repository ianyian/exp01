import React from "react";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      isPlayerTurn: true,
    };
  }

  handleClick(index) {
    const { board, isPlayerTurn } = this.state;
    if (board[index] || this.calculateWinner(board) || !isPlayerTurn) {
      return;
    }

    board[index] = "X";
    this.setState({ board, isPlayerTurn: false }, () => {
      if (!this.calculateWinner(board) && board.includes(null)) {
        this.computerMove();
      }
    });
  }

  computerMove() {
    const { board } = this.state;
    let availableMoves = board
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null);

    const randomMove =
      availableMoves[Math.floor(Math.random() * availableMoves.length)];

    if (randomMove !== undefined) {
      board[randomMove] = "O";
      this.setState({ board, isPlayerTurn: true });
    }
  }

  calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  resetGame = () => {
    this.setState({
      board: Array(9).fill(null),
      isPlayerTurn: true,
    });
  };

  render() {
    const { board } = this.state;
    const winner = this.calculateWinner(board);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.state.isPlayerTurn ? "You (X)" : "Computer (O)"}`;

    return (
      <div>
        <h2>Tic-Tac-Toe (Player vs Computer)</h2>
        <div style={{ marginBottom: "10px" }}>{status}</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 100px)",
            gap: "5px",
          }}
        >
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => this.handleClick(index)}
              style={{ width: "100px", height: "100px", fontSize: "2em" }}
            >
              {value}
            </button>
          ))}
        </div>
        <button
          onClick={this.resetGame}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1em",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reset Game
        </button>
      </div>
    );
  }
}

export default TicTacToe;
