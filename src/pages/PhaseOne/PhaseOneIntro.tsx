import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'

export const PhaseOneIntro = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={`Worum geht's`} section={'Phase 1/3'}></Header>
      <ContentWrapper>
        <p className="font-sourceSerif text-lg font-medium text-center">
          Teilt eure Sichtweisen miteinander. Das hilft euch dabei, zu verstehen, worum es in eurem
          Streit geht. Lasst uns Klarheit schaffen!
        </p>
        <img src={`./img/speakbubble.png`} alt="speakbubble" className="inline w-3/5 md:w-1/3" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
