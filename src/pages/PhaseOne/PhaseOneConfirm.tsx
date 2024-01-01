import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { PlayerIcon } from '../../components/PlayerIcon'
import { toStep } from '../../game/gameSlice'
import { usePlayers } from '../../hooks/usePlayers'
import { GameStepProps } from '../types'

export const PhaseOneConfirm = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const dispatch = useDispatch()

  const backToStep = activePlayer === 'player1' ? 5 : activePlayer === 'player2' ? 8 : 0

  return (
    <>
      <Header title={currentPlayer} section={'Phase 1/3'}></Header>
      <ContentWrapper>
        <PlayerIcon player={activePlayer} display="full" />
        <p className="font-sourceSerif text-xl font-semibold text-center italic">
          {currentPlayer}, hast du das Gefühl, dass {partnerPlayer} dich versteht?
        </p>
        <img className="py-8" src={'./img/questionmark.png'} alt="sprechblase" />
      </ContentWrapper>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(toStep({ stepId: backToStep }))}
          title={`Nein, noch was ergänzen`}
          buttonStyle="secondary"
        />
        <Button onClick={nextStep} title={`Ja, weiter`} />
      </ButtonContainer>
    </>
  )
}
