import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

export const PhaseTwoComplete = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={'Glückwunsch!'} section={'Phase 2/3'} />
      <ContentWrapper>
        <img className="inline w-2/3" src={'./img/success-phase-2.png'} alt="speakbubble" />
        <p className="font-sourceSerif text-xl font-semibold text-center">
          {`Ihr habt euch echt ins Zeug gelegt!\nPhase 2 ist abgeschlossen.`}
        </p>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Weiter`} />
      </ButtonContainer>
    </>
  )
}
