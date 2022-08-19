import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));

  function addMoveByComputer() {
    const copyBoard = structuredClone(board);

    let selected;
    do {
      selected = Math.floor(Math.random() * 9);
    } while (board[selected] !== "");

    setBoard(copyBoard);
  }

  function addMoveByPlayer(index: number) {
    const copyBoard = structuredClone(board);

    if (copyBoard[index] === "") {
      copyBoard[index] = "O";
      setBoard(copyBoard);
    }
    addMoveByComputer();
  }

  return (
    <div className="App">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="play-area">
        {board.map((block, index) => (
          <div
            key={index}
            className={
              block === "X" || block === "O"
                ? `block block_${index} occupied`
                : `block block_${index}`
            }
            onClick={() => {
              addMoveByPlayer(index);
            }}
          >
            {block}
          </div>
        ))}
      </div>
      <div className="winner_reset">
        <h2 className="winner"></h2>
        <button>RESET BOARD</button>
      </div>
    </div>
  );
}

export default App;
