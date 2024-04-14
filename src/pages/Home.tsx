import { Hero } from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearGameState } from '../game/gameSlice'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { PageWrapper } from '../components/PageWrapper'
import { Footer } from '../components/Footer'

export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // sets initial game state when user enters or returns to home page
    dispatch(clearGameState())
  })

  return (
    <PageWrapper>
      <div className="slope-element absolute h-screen w-full -z-10 bg-yellowdark"></div>
      <Hero />
      <ButtonContainer>
        <Button title={'Start'} onClick={() => navigate('/streiten')} />
        <Button title={'About'} onClick={() => navigate('/about')} buttonStyle="secondary" />
      </ButtonContainer>
      <Footer />
    </PageWrapper>
  )
}
