import { Header } from '../components/Header'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { GameStepProps } from './types'
import { ContentWrapper } from '../components/ContentWrapper'
import { BaseText } from '../components/BaseText'

export const Onboarding = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title={'Das erwartet euch'} />
      <ContentWrapper>
        <div className="space-y-1">
          <BaseText text={'Die Streitlösung dauert ca. 30 Minuten und findet in 3 Phasen statt.'} />
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Weiter" onClick={nextStep} />
      </ButtonContainer>
    </>
  )
}
