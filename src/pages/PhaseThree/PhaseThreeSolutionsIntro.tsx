import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { usePlayers } from '../../hooks/usePlayers'

export const PhaseThreeSolutionsIntro = ({ nextStep }: GameStepProps) => {
  const { currentPlayer } = usePlayers()

  return (
    <>
      <Header title={`Erste Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline" />
        <p className="font-sourceSerif text-xl font-semibold text-center">
          {`Danke. Nun schreibt gemeinsam die Lösungsoptionen für ${currentPlayer} auf.`}
        </p>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
