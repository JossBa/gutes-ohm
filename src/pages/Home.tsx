import { Hero } from '../components/Hero'
import { useNavigate, Link } from 'react-router-dom'
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
    dispatch(clearGameState())
  })

  return (
    <PageWrapper>
      <div className="slope-element absolute h-screen w-full -z-10 bg-yellowdark"></div>
      <Hero />
      <ButtonContainer>
        <Button title={'Start'} onClick={() => navigate('/streiten')} />
        <Link
          className={`min-w-[220px] p-3 text-base font-medium font-josefin uppercase tracking-wide 'bg-transparent border-2 border-anthrazit text-anthrazit`}
          to="https://www.gutes-ohm.com/#ohm"
          target="_blank"
          rel="noreferrer"
        >
          About
        </Link>
      </ButtonContainer>
      <Footer />
    </PageWrapper>
  )
}
