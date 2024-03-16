import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

export const PhaseOneFinale = ({ nextStep }: GameStepProps) => {
  const navigate = useNavigate()

  const handleBreak = () => {
    navigate('/pause')
  }

  return (
    <>
      <Header title={`Weiter geht's!`} section={''} />
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Seid ihr bereit für die nächste Phase?{' '}
        </p>
        <img className="inline w-2/3" src={'./img/next-phase-2.png'} alt="speakbubble" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={handleBreak} title={`Pause`} />
        <Button onClick={nextStep} title={`Los geht's`} />
      </ButtonContainer>
    </>
  )
}
