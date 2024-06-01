import { GameStepProps } from './../types'
import { usePlayers } from '../../hooks/usePlayers'
import { Header } from '../../components/Header'
import { ContentWrapper } from '../../components/ContentWrapper'
import { PlayerIcon } from '../../components/PlayerIcon'
import { ButtonContainer } from '../../components/ButtonContainer'
import { Button } from '../../components/Button'
import { useRef, useState } from 'react'

export const PhaseTwoSentences = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const counterRef = useRef(-1)
  const [currentSentence, setCurrentSentence] = useState(``)
  const sentences = [
    `»\nWenn ${partnerPlayer}...\ndann fühle ich mich...\n«`,
    `»\nIch brauche...um mich besser zu fühlen.\n«`,
    `»\nIch wünsche mir von ${partnerPlayer}...\n«`,
  ]

  const handleNextSentence = () => {
    counterRef.current += 1
    if (counterRef.current > 2) {
      nextStep()
    }
    setCurrentSentence(sentences[counterRef.current])
  }

  return (
    <>
      <Header title={currentPlayer} section={'Phase 2/3'} />
      <ContentWrapper>
        <PlayerIcon player={activePlayer} display="full" />
        {counterRef.current < 0 ? (
          <>
            <p className="font-sourceSerif text-xl font-semibold text-center">
              {`${currentPlayer}, du bekommst gleich drei Sätze nacheinander angezeigt. Vervollständige
          sie bitte!`}
            </p>

            <PlayerIcon
              player={activePlayer === 'player1' ? 'player2' : 'player1'}
              display="outline"
            />
            <p className="font-sourceSerif text-xl font-semibold text-center italic">
              {`${partnerPlayer}, aufmerksam zuhören!`}
            </p>
          </>
        ) : (
          <>
            <p className="font-sourceSerif text-xl font-semibold text-center">{`${currentPlayer}, vervollständige den ${
              counterRef.current + 1
            }. Satz:`}</p>
            <p className="font-sourceSerif text-xl font-semibold text-center italic whitespace-pre">
              {currentSentence}
            </p>
          </>
        )}
      </ContentWrapper>
      <ButtonContainer>
        <Button
          title={
            counterRef.current >= 0
              ? counterRef.current >= 2
                ? 'Weiter'
                : 'Nächster Satz'
              : 'Start'
          }
          onClick={handleNextSentence}
        />
      </ButtonContainer>
    </>
  )
}
