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
    <label className="flex flex-row space-x-2 px-4">
      <input
        type="checkbox"
        className="h-7 w-7 text-anthrazit border-none outline-none focus:ring-0"
        required
        checked={checked}
        onChange={() => {
          setChecked(!checked)
        }}
      />
      <p className="text-left break-words w-fit list-none font-sourceSerif">{title}</p>
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
        <div className="flex flex-col items-start">
          <div className="md:space-y-3 space-y-2">
            {rituals.map((ritual) => (
              <Checkbox title={ritual} />
            ))}
          </div>
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Peace out`} />
      </ButtonContainer>
    </>
  )
}
