import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { BaseText } from '../../components/BaseText'

export const PhaseThreeIntro = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={`Happy End`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <BaseText text={'Was könnten Lösungen sein, von denen ihr beide profitiert?'} />

        <img className="inline md:w-1/3 w-1/2" src={'./img/solutions.png'} alt="solutions" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
