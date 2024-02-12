import { WINNER } from '../constants.js'
import { Square } from './Square.jsx'

const WinnerModal = ({ winner, resetGame }) => {
  if (!winner) return null

  const winnerText = winner === WINNER.DRAW ? 'It\'s a draw!' : 'Wins!'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {winnerText}
        </h2>
        {winner !== WINNER.DRAW && (
          <header className='win'>
            <Square>{winner}</Square>
          </header>
        )}

        <footer>
          <button onClick={resetGame}>
            New Game
          </button>
        </footer>

      </div>
    </section>
  )
}

export default WinnerModal
