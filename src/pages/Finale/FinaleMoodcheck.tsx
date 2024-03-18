import { Moodcheck } from '../../components/Moodcheck'
import { usePlayers } from '../../hooks/usePlayers'
import { GameStepProps } from '../types'

export const FinaleMoodcheck = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()

  return (
    <Moodcheck
      title={'Moodcheck'}
      section={'Abschluss'}
      activePlayerInstructions={`${currentPlayer}, wie zufrieden bist du mit eurer Lösung?`}
      buttonTitle={activePlayer === 'player1' ? `Weiter zu ${partnerPlayer}` : 'Weiter'}
      activePlayer={activePlayer}
      nextStep={nextStep}
    ></Moodcheck>
  )
}
