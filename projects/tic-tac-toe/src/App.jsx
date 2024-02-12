import {useState} from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from "./constants";
import {calculateWinner} from "./domain/board.js";
import useSaveGame from "./hooks/useSaveGame.js";
import WinnerModal from "./components/WinnerModal.jsx";
import GameBoard from "./components/GameBoard.jsx";
import TurnedSquare from "./components/TurnSquare.jsx";

function App() {

  const [board, setBoard, deleteBoard] = useSaveGame('board', Array(9).fill(null));
  const [turn, setTurn, deleteTurn] = useSaveGame('turn', TURNS.X);

  const [winner, setWinner] = useState(null)

  const updatedBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = calculateWinner(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
  }

  const resetGame = () => {
    deleteBoard();
    deleteTurn();
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>
        Reset Game
      </button>
      <section className="game">
        <GameBoard board={board} updatedBoard={updatedBoard} />
      </section>
      <TurnedSquare turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
