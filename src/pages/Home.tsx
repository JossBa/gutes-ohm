import { Hero } from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearGameState } from '../game/gameSlice'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { PageWrapper } from '../components/PageWrapper'
import { Footer } from '../components/Footer'
import confetti from 'canvas-confetti'

export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const triangle = confetti.shapeFromPath({ path: 'M0 18 L9 3 L18 18z' })
  const cube = confetti.shapeFromPath({ path: 'M 0 0 H 18 V 18 H 0 z' })
  const circle = confetti.shapeFromPath({ path: 'M 9, 18 a 9,9 0 1,1 18,0 a 9,9 0 1,1 -18,0' })

  useEffect(() => {
    dispatch(clearGameState())
  })

  const triggerConfetti = () => {
    confetti({
      origin: { y: 0.5, x: 0.5 },
      colors: ['#0097C5', '#A0D4DE', '#F9BB00', '#FFE062'],
      shapes: [triangle, cube, circle],
      particleCount: 150,
      angle: 90,
      duration: 5000,
      scalar: 1.5,
      spread: 90,
    })
  }
  return (
    <PageWrapper>
      <div className="slope-element absolute h-screen w-full -z-10 bg-yellowdark"></div>
      <Hero />
      <ButtonContainer>
        <Button title={'Start'} onClick={() => navigate('/streiten')} />
        <Button title={'About'} onClick={triggerConfetti} buttonStyle="secondary" />
      </ButtonContainer>
      <Footer />
    </PageWrapper>
  )
}
