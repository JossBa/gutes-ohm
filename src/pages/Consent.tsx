import React from 'react'
import { Header } from '../components/Header'
import { Form } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { GameStepProps } from './types'

export const Consent = ({ handleNext }: GameStepProps) => {
  const {
    step: { activePlayer },
    playerA,
    playerB,
  } = useSelector((state: RootState) => state.game)

  const currentPlayer = activePlayer === 'a' ? playerA : playerB
  const partnerPlayer = activePlayer === 'a' ? playerB : playerA

  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (checked1 && checked2) {
      handleNext()
      setChecked1(false)
      setChecked2(false)
    } else {
      setError(true)
    }
  }

  return (
    <div>
      <Header title={`Bereit, ${currentPlayer}?`} section="Zu Beginn" />
      <p>
        Den Streit lösen zu wollen, ist wichtig, damit OHM funktioniert. Bestätige deine
        Bereitschaft in zwei Schritten:
      </p>
      <Form>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox-1"
            required
            checked={checked1}
            onChange={() => {
              setChecked1(!checked1)
              setError(false)
            }}
          />
          <span className="ml-2">Ich möchte gemeinsam mit {partnerPlayer} eine Lösung finden.</span>
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox-2"
            required
            checked={checked2}
            onChange={() => {
              setChecked2(!checked2)
              setError(false)
            }}
          />
          <span className="ml-2">Ich lasse {partnerPlayer} ausreden und höre aktiv zu.</span>
        </label>
        {error && <p className="text-red-500">Bitte bestätige beide Punkte.</p>}
        <button
          className="my-4 bg-green-300"
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
          Weiter
        </button>
      </Form>
    </div>
  )
}
