import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { PlayerIcon } from '../../components/PlayerIcon'
import { toStep } from '../../game/gameSlice'
import { usePlayers } from '../../hooks/usePlayers'
import { GameStepProps } from '../types'

export const PhaseThreeConfirm = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer } = usePlayers()
  const dispatch = useDispatch()

  const backToStep = activePlayer === 'player1' ? 23 : activePlayer === 'player2' ? 25 : 22

  return (
    <>
      <Header title={currentPlayer} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <PlayerIcon player={activePlayer} display="full" />
        <p className="font-sourceSerif text-xl font-semibold text-center italic">
          {currentPlayer}, wie findest du die Vorschläge?
        </p>
        <img className="inline w-1/3" src={'./img/questionmark.svg'} alt="questionmark" />
      </ContentWrapper>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(toStep({ stepId: backToStep }))}
          title={`Noch nicht so passend`}
        />
        <Button onClick={nextStep} title={`Schon echt gut`} />
      </ButtonContainer>
    </>
  )
}
