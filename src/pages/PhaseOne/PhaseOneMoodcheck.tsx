import { Moodcheck } from '../../components/Moodcheck'
import { usePlayers } from '../../hooks/usePlayers'
import { GameStepProps } from '../types'

export const PhaseOneMoodcheck = ({ nextStep }: GameStepProps) => {
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
