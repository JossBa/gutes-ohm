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
        <div className="text-center font-sourceSerif text-xl font-semibold">
          <p>Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.</p>
        </div>
        <form>
          <div className="flex flex-col space-y-4 ">
            <label>
              <input
                className={`w-64 h-14 p-3 m-2 bg-yellowlight border-none placeholder-opacity-75 placeholder-greymedium font-josefin font-semibold text-l uppercase focus:outline-none focus:ring focus:ring-yellowdark bg-no-repeat bg-right bg-origin-content ${
                  player1 !== ''
                    ? 'bg-[url("./img/quadrat-full.svg")]'
                    : 'bg-[url("./img/quadrat-outline.svg")]'
                }  `}
                type="text"
                ref={input1Ref}
                name="player1"
                required
                placeholder="Erste Partei"
                value={player1}
                onChange={(e) => {
                  setPlayer1(e.target.value)
                }}
                onFocus={() => {
                  setError1(false)
                }}
                onBlur={() => scrollToTop()}
                autoComplete="off"
              />
              {error1 && (
                <p className="text-red-500 font-medium text-base mb-2">
                  Bitte gib hier einen Namen ein.
                </p>
              )}
            </label>
            <label>
              <input
                className={`w-64 h-14 p-3 m-2 bg-bluelight border-none placeholder-opacity-75 placeholder-greymedium font-josefin font-semibold text-l uppercase focus:outline-none focus:ring focus:ring-bluedark bg-no-repeat bg-right bg-origin-content ${
                  player2 !== ''
                    ? 'bg-[url("./img/dreieck-full.svg")]'
                    : 'bg-[url("./img/dreieck-outline.svg")]'
                }  `}
                type="text"
                name="player2"
                required
                placeholder="Zweite Partei"
                value={player2}
                onChange={(e) => {
                  setPlayer2(e.target.value)
                }}
                onBlur={() => scrollToTop()}
                onFocus={() => {
                  setError2(false)
                }}
                autoComplete="off"
              />
              {error2 && (
                <p className="text-red-500 font-medium text-base mb-2 pl-2">
                  Bitte gib hier einen Namen ein.
                </p>
              )}
            </label>
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
