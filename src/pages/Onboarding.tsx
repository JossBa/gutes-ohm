import { Header } from '../components/Header'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { GameStepProps } from './types'
import { ContentWrapper } from '../components/ContentWrapper'
import { BaseText } from '../components/BaseText'

export const Onboarding = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header section={'Zu Beginn'} title={'Das erwartet euch'} />
      <ContentWrapper>
        <div className="space-y-2">
          <BaseText text={'Streitlösung in ca. 30 min.'} />
          <BaseText text={'Ein Prozess in 3 Phasen.'} />
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Weiter" onClick={nextStep} />
      </ButtonContainer>
    </>
  )
}
