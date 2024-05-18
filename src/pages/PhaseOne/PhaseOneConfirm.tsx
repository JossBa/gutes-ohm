import { useDispatch } from 'react-redux'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { PlayerIcon } from '../../components/PlayerIcon'
import { toStep } from '../../game/gameSlice'
import { usePlayers } from '../../hooks/usePlayers'
import { GameStepProps } from '../types'
import { BaseText } from '../../components/BaseText'

export const PhaseOneConfirm = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const dispatch = useDispatch()

  const backToStep = activePlayer === 'player1' ? 5 : activePlayer === 'player2' ? 8 : 0

  return (
    <>
      <Header title={currentPlayer} section={'Phase 1/3'}></Header>
      <ContentWrapper>
        <PlayerIcon player={activePlayer} display="full" />
        <BaseText
          text={`${currentPlayer}, hast du das Gefühl, dass ${partnerPlayer} dich versteht?`}
          italic="italic"
        />
        <img className="inline w-1/4 mb-4" src={'./img/questionmark.svg'} alt="questionmark" />
      </ContentWrapper>
      <ButtonContainer>
        <Button
          onClick={() => dispatch(toStep({ stepId: backToStep }))}
          title={`Nein, noch was ergänzen`}
        />
        <Button onClick={nextStep} title={`Ja, weiter`} />
      </ButtonContainer>
    </>
  )
}
