import { Link } from 'react-router-dom'
import { BaseText } from '../../components/BaseText'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

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
          className={`min-w-[220px] p-3 text-base font-medium font-josefin uppercase tracking-wide bg-anthrazit text-slate-50`}
          to="https://www.gutes-ohm.com/#ohm"
          target="_blank"
          rel="noreferrer"
        >
          OHM Homepage
        </Link>
        <Button onClick={nextStep} title={`OHM unterstützen`} />
        <Link
          className={`min-w-[220px] p-3 text-base font-medium font-josefin uppercase tracking-wide 'bg-transparent border-2 border-anthrazit text-anthrazit`}
          to={
            'mailto:hallo@gutes-ohm.com?subject=Mediation buchen&body=Ich möchte gerne eine Mediation buchen. Bitte kontaktiert mich.'
          }
        >
          Mediation buchen
        </Link>
      </ButtonContainer>
    </>
  )
}
