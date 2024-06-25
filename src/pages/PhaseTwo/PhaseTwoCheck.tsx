import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseTwoCheck = ({ nextStep }: GameStepProps) => {
  const { activePlayer, partnerPlayer } = usePlayers()

  return (
    <>
      <Header title={`So weit, so gut`} section={'Phase 2/3'}></Header>
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Das lassen wir jetzt erstmal so stehen. Danke!
        </p>
        <img className="inline w-1/2" src={'./img/check-herz.png'} alt="rotating arrows" />
      </ContentWrapper>
      <ButtonContainer>
        <Button
          onClick={nextStep}
          title={activePlayer === 'player1' ? `Weiter zu ${partnerPlayer}` : 'Weiter'}
        />
      </ButtonContainer>
    </>
  )
}
