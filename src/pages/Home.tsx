import { Hero } from '../components/Hero'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Hero />
      <button onClick={() => navigate('/onboarding')}>START</button>
    </>
  )
}
