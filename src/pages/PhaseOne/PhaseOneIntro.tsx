import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import icon from '../../assets/speakbubble.png'
import { ContentWrapper } from '../../components/ContentWrapper'

export const PhaseOneIntro = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={`Worum geht's`} section={'Phase 1/3'}></Header>
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Teilt eure Sichtweisen miteinander. Das hilft euch dabei, zu verstehen, worum es in eurem
          Streit geht. Lasst uns Klarheit schaffen!
        </p>
        <img className="inline w-2/3" src={icon} alt="speakbubble" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
