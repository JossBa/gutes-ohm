import { BaseText } from '../../components/BaseText'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

export const PhaseThreeComplete = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={'Glückwunsch!'} section={'Phase 1/3'} />
      <ContentWrapper>
        <img
          className="inline sm:w-1/3 md:w-1/4 w-2/3"
          src={'./img/success-phase-3.png'}
          alt="success-phase-3"
        />
        <BaseText text={'Das habt ihr super gemacht! Phase 3 ist abgeschlossen.'} />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Weiter`} />
      </ButtonContainer>
    </>
  )
}
