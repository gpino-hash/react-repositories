import { WINNER, WINNER_COMBOS } from '../constants.js'

export const calculateWinner = (board) => {
  for (let i = 0; i < WINNER_COMBOS.length; i++) {
    const [a, b, c] = WINNER_COMBOS[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return board.includes(null) ? null : WINNER.DRAW
}
