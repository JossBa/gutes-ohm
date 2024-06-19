import { Link } from 'react-router-dom'
import { BaseText } from '../../components/BaseText'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

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
        <Link
          className={`min-w-[220px] h-11 p-3 pt-3 text-base font-bold font-transat uppercase tracking-widest bg-anthrazit text-slate-50`}
          to="https://www.gutes-ohm.com/#ohm"
          target="_blank"
          rel="noreferrer"
        >
          OHM Homepage
        </Link>
        <Button onClick={nextStep} title={`OHM unterstützen`} />
        <Link
          className={`min-w-[218px] p-2 text-base font-bold font-transat uppercase tracking-wide bg-transparent border-2 border-anthrazit text-anthrazit`}
          to={`mailto:hallo@gutes-ohm.com?subject=Mediation buchen&body=${mediationEmailBody}`}
        >
          Mediation buchen
        </Link>
      </ButtonContainer>
    </>
  )
}
