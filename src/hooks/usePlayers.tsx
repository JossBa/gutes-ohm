import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export const usePlayers = () => {
  const {
    step: { activePlayer },
    playerA,
    playerB,
  } = useSelector((state: RootState) => state.game)

  const currentPlayer = activePlayer === 'player1' ? playerA : playerB
  const partnerPlayer = activePlayer === 'player1' ? playerB : playerA

  return {
    activePlayer,
    currentPlayer,
    partnerPlayer,
  }
}
