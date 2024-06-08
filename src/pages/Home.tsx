import { Hero } from '../components/Hero'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearGameState } from '../game/gameSlice'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'

export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(clearGameState())
  })

  return (
    <div className="w-full h-screen flex flex-col max-w-4xl justify-between items-center text-center p-5 mx-auto box-border">
      <div className="slope-element absolute h-screen w-full -z-10 bg-yellowdark"></div>
      <Hero />
      <ButtonContainer>
        <Button title={'Start'} onClick={() => navigate('/streiten')} />
        <Link
          className={`min-w-[218px] p-3 text-base font-bold font-transat uppercase tracking-widest border-2 bg-transparent border-anthrazit text-anthrazit`}
          to="https://www.gutes-ohm.com/#ohm"
          target="_blank"
          rel="noreferrer"
        >
          About
        </Link>
      </ButtonContainer>
      <Footer />
    </div>
  )
}
