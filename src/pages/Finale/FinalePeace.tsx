import { useState } from 'react'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'
import { BaseText } from '../../components/BaseText'

const Checkbox = ({ title }: { title: string }) => {
  const [checked, setChecked] = useState(false)
  return (
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        className="h-7 w-7 text-anthrazit border-none ring-offset-0 outline-none focus:ring-0 focus:ring-transparent"
        required
        checked={checked}
        onChange={() => {
          setChecked(!checked)
        }}
      />
      <p className="space-y-2 font-sourceSerif text-lg font-medium italic ml-2 text-left">
        {title}
      </p>
    </label>
  )
}

export const FinalePeace = ({ nextStep }: GameStepProps) => {
  const rituals = ['Umarmung', 'High Five', 'Kippe danach', 'Kuss', 'Drink', 'Eigenes Ritual']
  return (
    <>
      <Header title={'Geschafft!'} section={'Abschluss'} />
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <BaseText text={'Mit welchem Friedensritual wollt ihr eure Lösung feiern?'} />
        <div className="space-y-2 px-4">
          {rituals.map((ritual) => (
            <Checkbox title={ritual} />
          ))}
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Peace out`} />
      </ButtonContainer>
    </>
  )
}
