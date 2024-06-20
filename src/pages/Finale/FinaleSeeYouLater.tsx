import { Link } from 'react-router-dom'
import { BaseText } from '../../components/BaseText'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'
import { CustomLink } from '../../components/Link'

const mediationEmailBody =
  'Ich habe Interesse an einer Mediation und möchte einen Termin vereinbaren. Bitte kontaktiert mich unter: %0D%0A %0D%0A E-Mail: %0D%0A %0D%0A Telefon:'

export const FinaleSeeYouLater = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title="Bis bald!" section="Abschluss" />
      <ContentWrapper>
        <BaseText text={`Ihr könnt richtig stolz sein, dass ihr es bis hierher geschafft habt.`} />
        <BaseText text={`Oft braucht es weitere Anläufe, um einen Konflikt komplett zu lösen.`} />
        <BaseText italic="italic" text={`Also bleibt dran!`} />
      </ContentWrapper>
      <ButtonContainer>
        <CustomLink to="https://www.gutes-ohm.com/#ohm" title="OHM Homepage" />
        <Button onClick={nextStep} title={`OHM unterstützen`} />
        <CustomLink
          style="secondary"
          to={`mailto:hallo@gutes-ohm.com?subject=Mediation buchen&body=${mediationEmailBody}`}
          title="Mediation buchen"
        />
      </ButtonContainer>
    </>
  )
}
