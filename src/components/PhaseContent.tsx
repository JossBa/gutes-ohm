import { GameStepProps } from '../pages/types'
import { BaseText } from './BaseText'
import { Button } from './Button'
import { ButtonContainer } from './ButtonContainer'
import { ContentWrapper } from './ContentWrapper'
import { Header } from './Header'
import { PlayerIcon } from './PlayerIcon'

interface PhaseContentProps extends GameStepProps {
  section: string
  activePlayerInstructions: string
  partnerPlayerInstructions?: string
  buttonTitle: string
  activePlayer: 'player1' | 'player2' | undefined
  currentPlayer: string
  partnerPlayer: string
  time: string
  started: boolean
  counting: boolean
  handleStart: () => void
}

export const PhaseContent = ({
  section,
  activePlayer,
  currentPlayer,
  partnerPlayer,
  time,
  started,
  counting,
  handleStart,
  nextStep,
  buttonTitle,
  activePlayerInstructions,
  partnerPlayerInstructions,
}: PhaseContentProps) => (
  <>
    <Header title={currentPlayer ?? ''} section={section} />
    <ContentWrapper>
      <PlayerIcon player={activePlayer} display="full" />
      <BaseText text={activePlayerInstructions} />
      {partnerPlayerInstructions && !started && (
        <>
          <PlayerIcon
            player={activePlayer === 'player1' ? 'player2' : 'player1'}
            display="outline"
          />
          <BaseText text={partnerPlayerInstructions} italic="italic" />
        </>
      )}
      {started && <h1 className="font-transat text-6xl p-4 mb-4">{time}</h1>}
    </ContentWrapper>
    <ButtonContainer>
      <Button
        buttonStyle={started && counting ? 'secondary' : 'primary'}
        disabled={false}
        title={buttonTitle}
        onClick={!started ? handleStart : nextStep}
      />
    </ButtonContainer>
  </>
)
