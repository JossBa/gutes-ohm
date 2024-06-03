import React from 'react'
import { Header } from '../components/Header'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { GameStepProps } from './types'
import { Button } from '../components/Button'
import { ButtonContainer } from '../components/ButtonContainer'
import { ContentWrapper } from '../components/ContentWrapper'
import { PlayerIcon } from '../components/PlayerIcon'

export const Consent = ({ nextStep }: GameStepProps) => {
  const {
    step: { activePlayer },
    playerA,
    playerB,
  } = useSelector((state: RootState) => state.game)

  const currentPlayer = activePlayer === 'player1' ? playerA : playerB
  const partnerPlayer = activePlayer === 'player1' ? playerB : playerA

  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (checked1 && checked2) {
      nextStep()
      setChecked1(false)
      setChecked2(false)
    } else {
      setError(true)
    }
  }
  return (
    <>
      <Header title={`Bereit, ${currentPlayer}?`} section="Zu Beginn" />
      <ContentWrapper>
        <PlayerIcon player={activePlayer} />
        <form className="space-y-8 px-2">
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="h-7 w-7 text-anthrazit border-none outline-none focus:ring-0"
              required
              checked={checked1}
              onChange={() => {
                setChecked1(!checked1)
                setError(false)
              }}
            />
            <p className="space-y-2 font-sourceSerif text-lg font-semibold italic ml-2 text-left">
              Ich möchte gemeinsam mit <span className="font-extrabold">{partnerPlayer} </span>eine
              Lösung finden.
            </p>
          </label>
          <label className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="h-7 w-7 text-anthrazit border-none outline-none focus:ring-0"
              required
              checked={checked2}
              onChange={() => {
                setChecked2(!checked2)
                setError(false)
              }}
            />
            <p className="space-y-2 font-sourceSerif text-lg font-semibold italic ml-2 text-left">
              Ich lasse <span className="font-extrabold">{partnerPlayer} </span>ausreden und höre
              aktiv zu.
            </p>
          </label>
          {error && (
            <p className="text-red-600 font-medium text-base animate-shake">
              Bitte bestätige beide Punkte.
            </p>
          )}
        </form>
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Weiter" onClick={(event) => handleSubmit(event)} />
      </ButtonContainer>
    </>
  )
}
