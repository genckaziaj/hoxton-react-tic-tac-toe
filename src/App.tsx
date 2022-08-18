import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="App">
      <h1 className="title">Tic-Tac-Toe</h1>
      <div className="play-area">
        {board.map((block, index) => (
          <div className={`block block_${index}`}></div>
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
