import React, { useState } from 'react'
import { Form, useOutletContext } from 'react-router-dom'
import { Header } from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { names } from '../game/gameSlice'
import { RootState } from '../app/store'

export const Names = () => {
  const { playerA, playerB } = useSelector((state: RootState) => state.game)
  const { trigger } = useOutletContext() as { trigger: () => void | undefined }

  const dispatch = useDispatch()

  const [player1, setPlayer1] = useState(playerA.name)
  const [player2, setPlayer2] = useState(playerB.name)

  const [error1, setError1] = React.useState(false)
  const [error2, setError2] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (player1 && player2) {
      dispatch(names({ playerA: player1, playerB: player2 }))
      trigger()
    } else {
      player1 === '' ? setError1(true) : setError1(false)
      player2 === '' ? setError2(true) : setError2(false)
    }
  }
  return (
    <>
      <Header title="Wer seid ihr?" section="Zu Beginn" />
      <p className="text-center">
        Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.
      </p>
      <Form method="post" action="/onboarding/names" noValidate>
        <label className="flex items-center">
          <input
            type="text"
            name="player1"
            required
            placeholder="Partei 1"
            value={player1}
            onChange={(e) => {
              setPlayer1(e.target.value)
            }}
            onFocus={() => {
              setError1(false)
            }}
          />
        </label>
        {error1 && (
          <span className="text-red-500 ml-2">Bitte gib einen Namen für Partei 1 ein.</span>
        )}
        <label className="flex items-center">
          <input
            type="text"
            name="player2"
            required
            placeholder="Partei 2"
            value={player2}
            onChange={(e) => {
              setPlayer2(e.target.value)
            }}
            onFocus={() => {
              setError2(false)
            }}
          />
        </label>
        {error2 && (
          <span className="text-red-500 ml-2">Bitte gib einen Namen für Partei 2 ein.</span>
        )}
        <br />
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Weiter
        </button>
      </Form>
    </>
  )
}
