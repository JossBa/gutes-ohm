import { useDispatch, useSelector } from 'react-redux'
import { Hero } from '../components/Hero'
import { clearGameState, nextStep } from '../game/gameSlice'
import { RootState } from '../app/store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Home = () => {
  const dispatch = useDispatch()
  const { nextRoute } = useSelector((state: RootState) => state.game)

  const navigate = useNavigate()

  useEffect(() => {
    if (nextRoute === '/') {
      dispatch(clearGameState())
    }
  }, [dispatch, nextRoute])

  const handleSomething = () => {
    dispatch(nextStep())
    navigate('/streiten')
  }

  return (
    <>
      <Hero />
      <button onClick={handleSomething}>START</button>
    </>
  )
}
