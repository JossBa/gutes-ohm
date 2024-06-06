import { Link, useNavigate } from 'react-router-dom'
import { BaseText } from '../../components/BaseText'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

const feedbackEmailBody =
  'Ich habe OHM genutzt und möchte euch Feedback geben! %0D%0A %0D%0A (1) Auf einer Skala von 1 (niemals) bis 10 (auf jeden Fall), wie wahrscheinlich ist es, dass du OHM weiterempfiehlst? Trage die entsprechende Zahl als Antwort ein. %0D%0A %0D%0A Antwort:%0D%0A %0D%0A (2) Was hat dir besonders bei der Verwendung von OHM gefallen? %0D%0A %0D%0A Antwort: %0D%0A %0D%0A (3) Was hat dir bei der Verwendung von OHM am wenigsten gefallen? %0D%0A %0D%0A Antwort:'

export const FinaleSupport = ({ nextStep }: GameStepProps) => {
  const navigate = useNavigate()

  return (
    <>
      <Header title="Unterstütze uns" />
      <ContentWrapper>
        <BaseText text={`Hilf uns, die Idee von gutem Streiten zu verbreiten: `} />
        <BaseText
          italic="italic"
          text={
            <>
              → Sag es weiter <br />
              → Gib uns Feedback <br />
              → Finanzieller Support <br />
            </>
          }
        />
      </ContentWrapper>
      <ButtonContainer>
        <Link
          className={`min-w-[220px] p-3 text-base font-medium font-transat uppercase tracking-wide bg-anthrazit text-slate-50`}
          to={`mailto:hallo@gutes-ohm.com?subject=Feedback geben&body=${feedbackEmailBody}`}
          target="_blank"
          rel="noreferrer"
        >
          Feedback geben
        </Link>
        <Link
          className={`min-w-[220px] p-3 text-base font-medium font-transat uppercase tracking-wide  bg-anthrazit text-slate-50`}
          to="https://www.gofundme.com/f/app-fur-moderne-streitlosung?utm_campaign=p_lico+share-sheet&utm_medium=copy_link&utm_source=customer"
          target="_blank"
          rel="noreferrer"
        >
          Finanzspritze geben
        </Link>
        <Button onClick={() => navigate('/')} title={`Zur Startseite`} buttonStyle="secondary" />
      </ButtonContainer>
    </>
  )
}
