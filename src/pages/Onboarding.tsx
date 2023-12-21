import { useNavigate } from 'react-router'
import { Header } from '../components/Header'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { ContentWrapper } from '../components/ContentWrapper'

export const Onboarding = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header section={'Zu Beginn'} title={'Das erwartet euch'} />
      <ContentWrapper>
        <div className="space-y-2 font-sourceSerif text-xl font-semibold">
          <p>Streitlösung in ca. 30 min.</p>
          <p>Ein Prozess in 3 Phasen.</p>
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Weiter" onClick={() => navigate('/streiten/names')} />
      </ButtonContainer>
    </>
  )
}
