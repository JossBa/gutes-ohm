import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

export const PhaseOneComplete = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={'Glückwunsch!'} section={'Phase 1/3'} />
      <ContentWrapper>
        <img
          className="inline sm:w-1/3 md:w-1/4 w-2/3"
          src={'./img/success-phase-1.png'}
          alt="speakbubble"
        />
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Ihr habt das großartig gemeistert! Phase 1 ist abgeschlossen.
        </p>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Weiter`} />
      </ButtonContainer>
    </>
  )
}
