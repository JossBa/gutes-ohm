import { Moodcheck } from '../../components/Moodcheck'
import { nextStep } from '../../game/gameSlice'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseOneMoodcheck = () => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()

  return (
    <Moodcheck
      title={'Moodcheck'}
      section={'Phase 1/3'}
      activePlayerInstructions={`${currentPlayer}, wie geht’s dir am Ende der ersten Phase?`}
      buttonTitle={activePlayer === 'player1' ? `Weiter zu ${partnerPlayer}` : 'Weiter'}
      activePlayer={activePlayer}
      nextStep={nextStep}
    ></Moodcheck>
  )
}
