import React, { useRef, useState, useEffect } from 'react'
import { Header } from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { names } from '../game/gameSlice'
import { RootState } from '../app/store'
import { Button } from '../components/Button'
import { ButtonContainer } from '../components/ButtonContainer'
import { ContentWrapper } from '../components/ContentWrapper'
import { GameStepProps } from './types'
import { scrollToTop } from '../utils/scrollToTop'
import { BaseText } from '../components/BaseText'
import { InputLabel } from '../components/InputLabel'

export const Names = ({ nextStep }: GameStepProps) => {
  const { playerA, playerB } = useSelector((state: RootState) => state.game)
  const dispatch = useDispatch()
  const input1Ref = useRef<HTMLInputElement>(null)

  const [player1, setPlayer1] = useState(playerA)
  const [player2, setPlayer2] = useState(playerB)

  const [error1, setError1] = React.useState(false)
  const [error2, setError2] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (player1 && player2) {
      dispatch(names({ playerA: player1, playerB: player2 }))
      nextStep()
    } else {
      player1 === '' ? setError1(true) : setError1(false)
      player2 === '' ? setError2(true) : setError2(false)
    }
  }

  return (
    <>
      <Header title="Wer seid ihr?" section="Zu Beginn" />
      <ContentWrapper>
        <BaseText
          text={'Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.'}
        />
        <form>
          <div className="flex flex-col space-y-4 ">
            <InputLabel
              player="player1"
              playerName={player1}
              setPlayer={setPlayer1}
              isError={error1}
              setError={setError1}
              scrollToTop={scrollToTop}
            />
            <InputLabel
              player="player2"
              playerName={player2}
              setPlayer={setPlayer2}
              isError={error2}
              setError={setError2}
              scrollToTop={scrollToTop}
            />
          </div>
        </form>
      </ContentWrapper>
      <ButtonContainer>
        <Button
          onClick={(event: React.FormEvent<HTMLButtonElement>) => handleSubmit(event)}
          title="Weiter"
        />
      </ButtonContainer>
    </>
  )
}
