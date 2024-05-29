import { Link, useNavigate } from 'react-router-dom'
import { BaseText } from '../../components/BaseText'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

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
              <br />
              → Sag es weiter <br />
              → Gib uns Feedback <br />
              → Finanzieller Support <br />
            </>
          }
        />
      </ContentWrapper>
      <ButtonContainer>
        <Link
          className={`min-w-[220px] p-3 text-base font-medium font-josefin uppercase tracking-wide bg-anthrazit text-slate-50`}
          to={`mailto:hallo@gutes-ohm.com?subject=Feedback zur OHM App&body=Hallo liebes OHM Team! Ich möchte Euch folgendes Feedback zur App geben:`}
          target="_blank"
          rel="noreferrer"
        >
          Feedback geben
        </Link>
        <Link
          className={`min-w-[220px] p-3 text-base font-medium font-josefin uppercase tracking-wide  bg-anthrazit text-slate-50`}
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
