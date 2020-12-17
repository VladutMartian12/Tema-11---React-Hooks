import React, {useState, useEffect} from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
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
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
};

const  Board = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };

    
  // }

  const [squares ,setSquares] = useState([Array(9).fill(null)]);
  const [xIsNext ,setXisNext] = useState([true]);

  onSquareClick((index) => {
    const winner = calculateWinner(squares);
    const newSquares = [...squares];
    if (newSquares[index] !== null || winner !== null) {
      return;
    }

    newSquares[index] = xIsNext ? "X" : "0";
    // this.setState({
    //   squares: newSquares,
    //   xIsNext: !this.state.xIsNext,
    // });
    setSquares(newSquares);
    setXisNext(!xIsNext)
  });

  return(() => {
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = (
        <div className="winner">
          <span>{winner}</span> is the Winner!
        </div>
      );
    } else {
      status = (
        <div className="status">
          Next player: {xIsNext ? "X" : "O"}
        </div>
      );
    }

    const items = squares.map((value, index) => {
      return (
        <Square
          key={index}
          value={value}
          onClick={() => {
            this.onSquareClick(index);
          }}
        />
      );
    });

    return (
      <div>
        {status}
        <div className="board">{items}</div>
      </div>
    );
  })
}

export default Board;
