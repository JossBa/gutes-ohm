import { useNavigate } from 'react-router-dom'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { PageWrapper } from '../components/PageWrapper'
import { Footer } from '../components/Footer'

export const About = () => {
  const navigate = useNavigate()

  return (
    <PageWrapper>
      <ButtonContainer>
        <Button title={'Home'} onClick={() => navigate('/')} />
      </ButtonContainer>
      <Footer />
    </PageWrapper>
  )
}
