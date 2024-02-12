import { Square } from './Square.jsx'

const GameBoard = ({ board, updatedBoard }) => {
  return board.map((_, index) => (
    <Square key={index} updatedBoard={updatedBoard} index={index}>
      {board[index]}
    </Square>
  ))
}

export default GameBoard
