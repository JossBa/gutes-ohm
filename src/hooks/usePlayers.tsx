import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export const usePlayers = () => {
  const {
    step: { activePlayer },
    playerA,
    playerB,
  } = useSelector((state: RootState) => state.game)

  const currentPlayer = activePlayer === 'a' ? playerA : playerB
  const partnerPlayer = activePlayer === 'a' ? playerB : playerA

  return {
    activePlayer,
    currentPlayer,
    partnerPlayer,
  }
}
