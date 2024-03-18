import { useState } from 'react'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { Header } from '../../components/Header'
import { GameStepProps } from '../types'

const Checkbox = ({ title }: { title: string }) => {
  const [checked, setChecked] = useState(false)
  return (
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        className="h-8 w-8 text-anthrazit border-none outline-none focus:ring-0"
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
  const rituals = [
    'Umarmung',
    'Küsschen',
    'High Five',
    'Kippe danach',
    'Kuss',
    'Drink',
    'Eigenes Ritual',
  ]
  return (
    <>
      <Header title={'Geschafft!'} section={'Abschluss'} />
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />

        <p className="font-sourceSerif text-lg text-center">
          Mit welchem Friedensritual wollt ihr eure Lösung feiern?
        </p>
        <>
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="h-8 w-8 text-anthrazit border-none outline-none focus:ring-0"
              required
              checked={false}
              onChange={() => {
                console.log('checkbox1')
              }}
            />
            <p className="space-y-2 font-sourceSerif text-xl font-semibold italic ml-2 text-left">
              Umarmung
            </p>
          </label>
        </>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title={`Peace out`} />
      </ButtonContainer>
    </>
  )
}
