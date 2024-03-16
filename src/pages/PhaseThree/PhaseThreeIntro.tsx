import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'

export const PhaseThreeIntro = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={`Happy End`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Brainstormt zusammen nach Ideen, um Lösungen zu finden, bei denen ihr beide auf eure
          Kosten kommt.
        </p>
        <img className="inline w-1/2" src={'./img/solutions.png'} alt="solutions" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
