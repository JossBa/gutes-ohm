import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { ButtonContainer } from './ButtonContainer'
import { ContentWrapper } from './ContentWrapper'
import { Header } from './Header'

export const BreakRoom = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header section={'Gönnt euch eine'} title={'Pausenzeit'} />
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Bitte lasst das Browserfenster geöffnet, euer Fortschritt wird sonst leider nicht
          gespeichert!
        </p>
      </ContentWrapper>
      <ButtonContainer>
        <Button title={'Weiter'} onClick={() => navigate('/streiten')} />
      </ButtonContainer>
    </>
  )
}
