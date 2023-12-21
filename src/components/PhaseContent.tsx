import { GameStepProps } from '../pages/types'
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
  activePlayer: 'a' | 'b' | undefined
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
  handleNext,
  buttonTitle,
  activePlayerInstructions,
  partnerPlayerInstructions,
}: PhaseContentProps) => (
  <>
    <Header title={currentPlayer ?? ''} section={section} />
    <ContentWrapper>
      <PlayerIcon player={activePlayer} display="full" />
      <p className="font-sourceSerif text-xl font-semibold text-center">
        {activePlayerInstructions}
      </p>
      {partnerPlayerInstructions && (
        <>
          <PlayerIcon player={activePlayer === 'a' ? 'b' : 'a'} display="outline" />
          <p className="font-sourceSerif text-xl font-semibold text-center italic">
            {partnerPlayerInstructions}
          </p>
        </>
      )}
      {started && <h1 className="font-josefin text-8xl p-4 mb-4">{time}</h1>}
    </ContentWrapper>
    <ButtonContainer>
      <Button
        style={started && counting ? 'secondary' : 'primary'}
        disabled={false}
        title={started ? (counting ? 'Bin schon fertig' : buttonTitle) : 'Start'}
        onClick={!started ? handleStart : handleNext}
      />
    </ButtonContainer>
  </>
)
