import { Hero } from '../components/Hero'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearGameState } from '../game/gameSlice'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { CustomLink } from '../components/Link'

export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(clearGameState())
  })

  return (
    <div className="md:h-screen h-[100dvh] w-full flex flex-col max-w-4xl justify-between items-center text-center mx-auto box-border">
      <div className="slope-element absolute h-screen w-full -z-10 bg-yellowdark"></div>
      <Hero />
      <ButtonContainer>
        <Button title={'Start'} onClick={() => navigate('/streiten')} />
        <CustomLink title={'About'} to="https://www.gutes-ohm.com/#ohm" style="secondary" />
      </ButtonContainer>
      <Footer />
    </div>
  )
}
