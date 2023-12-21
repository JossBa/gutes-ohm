import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { names } from '../game/gameSlice'
import { RootState } from '../app/store'
import { Button } from '../components/Button'
import { ButtonContainer } from '../components/ButtonContainer'
import { ContentWrapper } from '../components/ContentWrapper'

export const Names = () => {
  const { playerA, playerB } = useSelector((state: RootState) => state.game)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [player1, setPlayer1] = useState(playerA)
  const [player2, setPlayer2] = useState(playerB)

  const [error1, setError1] = React.useState(false)
  const [error2, setError2] = React.useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (player1 && player2) {
      dispatch(names({ playerA: player1, playerB: player2 }))
      navigate('/streiten')
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
          <div className="w-full mt-10 space-y-10">
            <div className="w-80 h-16">
              <label>
                <input
                  className={`w-full p-4 bg-yellowlight border-none placeholder-opacity-75 placeholder-greymedium font-josefin font-semibold text-xl uppercase focus:outline-none focus:ring focus:ring-yellowdark bg-no-repeat bg-right bg-origin-content ${
                    player1 !== ''
                      ? 'bg-[url("./img/quadrat-full.svg")]'
                      : 'bg-[url("./img/quadrat-outline.svg")]'
                  }  `}
                  type="text"
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
                  autoComplete="off"
                />
              </label>
              {error1 && (
                <p className="text-red-500 font-medium text-base my-1">
                  Bitte gib hier einen Namen ein.
                </p>
              )}
            </div>
            <div className="w-80 h-16">
              <label>
                <input
                  className={`w-full p-4 bg-bluelight border-none placeholder-opacity-75 placeholder-greymedium font-josefin font-semibold text-xl uppercase focus:outline-none focus:ring focus:ring-bluedark bg-no-repeat bg-right bg-origin-content ${
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
                  onFocus={() => {
                    setError2(false)
                  }}
                  autoComplete="off"
                />
              </label>
              {error2 && (
                <p className="text-red-500 font-golos font-medium text-base my-1">
                  Bitte gib hier einen Namen ein.
                </p>
              )}
            </div>
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
