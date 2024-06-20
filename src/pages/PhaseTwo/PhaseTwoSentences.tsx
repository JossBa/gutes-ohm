import { GameStepProps } from './../types'
import { usePlayers } from '../../hooks/usePlayers'
import { Header } from '../../components/Header'
import { ContentWrapper } from '../../components/ContentWrapper'
import { PlayerIcon } from '../../components/PlayerIcon'
import { ButtonContainer } from '../../components/ButtonContainer'
import { Button } from '../../components/Button'
import { useRef, useState } from 'react'
import { BaseText } from '../../components/BaseText'

export const PhaseTwoSentences = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer, partnerPlayer } = usePlayers()
  const counterRef = useRef(-1)
  const [currentSentence, setCurrentSentence] = useState(``)
  const sentences = [
    `»Wenn ${partnerPlayer}... dann fühle ich mich ...«`,
    `»Ich brauche... um mich besser zu fühlen.«`,
    `»Ich wünsche mir von ${partnerPlayer}...«`,
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
            <BaseText
              text={`${currentPlayer}, du bekommst gleich 3 Sätze nacheinander angezeigt. Vervollständige
          sie bitte!`}
            />

            <PlayerIcon
              player={activePlayer === 'player1' ? 'player2' : 'player1'}
              display="outline"
            />
            <BaseText text={`${partnerPlayer}, aufmerksam zuhören!`} italic="italic" />
          </>
        ) : (
          <>
            <BaseText
              text={`${currentPlayer}, vervollständige den ${counterRef.current + 1}. Satz:`}
            />
            <br />
            <p className="font-sourceSerif text-2xl font-semibold text-center italic break-words">
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
