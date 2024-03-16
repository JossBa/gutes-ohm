import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'

export const PhaseTwoIntro = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={`Hinter den Kulissen`} section={'Phase 2/3'}></Header>
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Lasst uns herausfinden, was sich hinter eurem Streit verbirgt. Sprecht über eure Gefühle,
          Bedürfnisse und Interessen!
        </p>
        <img className="inline w-1/2" src={'./img/rotate.svg'} alt="rotating arrows" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
