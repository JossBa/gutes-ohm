import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import icon from '../../assets/sprechblase.png'
import { ContentWrapper } from '../../components/ContentWrapper'

export const PhaseOneIntro = ({ handleNext }: GameStepProps) => {
  return (
    <>
      <Header title={`Worum geht's`} section={'Phase 1/3'}></Header>
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Teilt eure Sichtweisen miteinander. Das hilft euch dabei, zu verstehen, worum es in eurem
          Streit geht. Lasst uns Klarheit schaffen!
        </p>
        <img src={icon} alt="sprechblase" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={handleNext} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
