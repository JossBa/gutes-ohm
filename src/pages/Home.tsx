import { Hero } from '../components/Hero'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearGameState } from '../game/gameSlice'
import { ButtonContainer } from '../components/ButtonContainer'
import { Button } from '../components/Button'

export const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // sets initial game state when user enters or returns to home page
    dispatch(clearGameState())
  })

  return (
    <>
      <div className="slope-element absolute h-screen w-full -z-10 bg-yellowdark "></div>
      <Hero />
      <ButtonContainer>
        <Button title={'Start'} onClick={() => navigate('/streiten/onboarding')} />
      </ButtonContainer>
    </>
  )
}
