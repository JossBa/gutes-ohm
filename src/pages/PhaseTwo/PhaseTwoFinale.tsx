import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

export const PhaseTwoFinale = ({ nextStep }: GameStepProps) => {
  const navigate = useNavigate()

  const handleBreak = () => {
    navigate('/pause')
  }

  return (
    <>
      <Header title={`Weiter geht's!`} section={''} />
      <ContentWrapper>
        <p className="font-sourceSerif text-xl font-semibold text-center">
          Seid ihr bereit für die nächste Phase?
        </p>
        <img className="inline md:w-1/3 w-2/3" src={'./img/next-phase-3.png'} alt="speakbubble" />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={handleBreak} title={`Pause`} buttonStyle="secondary" />
        <Button onClick={nextStep} title={`Bereit!`} />
      </ButtonContainer>
    </>
  )
}
