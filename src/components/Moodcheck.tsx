import { Header } from './Header'
import { ButtonContainer } from './ButtonContainer'
import { Button } from './Button'
import { ContentWrapper } from './ContentWrapper'
import { GameStepProps } from '../pages/types'
import RadioButton from './RadioButton'
import { useState } from 'react'
import { PlayerIcon } from './PlayerIcon'

type Mood = 'mood-level-1' | 'mood-level-2' | 'mood-level-3' | 'mood-level-4' | 'mood-level-5'

interface MoodcheckProps extends GameStepProps {
  title: string
  section: string
  activePlayerInstructions: string
  buttonTitle: string
  activePlayer: 'player1' | 'player2' | undefined
}

export const Moodcheck = ({
  nextStep,
  section,
  title,
  activePlayer,
  activePlayerInstructions,
  buttonTitle,
}: MoodcheckProps) => {
  const [moodLevel, setMoodLevel] = useState<Mood>('mood-level-3')
  const handleMoodChange = (moodLevel: Mood) => {
    setMoodLevel(moodLevel)
  }

  return (
    <>
      <Header section={section} title={title} />
      <ContentWrapper>
        <PlayerIcon player={activePlayer === 'player1' ? 'player2' : 'player1'} display="full" />
        <p className="font-sourceSerif text-xl font-semibold text-center">
          {activePlayerInstructions}
        </p>
        <div className="w-full flex flex-col space-y-4">
          <img
            src={`img/arrow.svg`}
            alt="pfeil in zwei richtungen"
            className="w-[74px] h-auto self-center mt-8"
          />
          <div className="flex flex-row justify-between w-full">
            <RadioButton
              alt="angry mood"
              checked={moodLevel === 'mood-level-1'}
              onChange={() => handleMoodChange('mood-level-1')}
            />
            <hr className="border-anthrazit border-[1.5px] flex-1 mt-[18px] -ml-[11px] -mr-[11px]" />
            <RadioButton
              alt="sad mood"
              checked={moodLevel === 'mood-level-2'}
              onChange={() => handleMoodChange('mood-level-2')}
            />
            <hr className="border-anthrazit border-[1.5px] flex-1 mt-[18px] -ml-[11px] -mr-[11px]" />

            <RadioButton
              alt="neutral mood"
              checked={moodLevel === 'mood-level-3'}
              onChange={() => handleMoodChange('mood-level-3')}
            />
            <hr className="border-anthrazit border-[1.5px] flex-1 mt-[18px] -ml-[11px] -mr-[11px]" />

            <RadioButton
              alt="good mood"
              checked={moodLevel === 'mood-level-4'}
              onChange={() => handleMoodChange('mood-level-4')}
            />
            <hr className="border-anthrazit border-[1.5px] flex-1 mt-[18px] -ml-[11px] -mr-[11px]" />

            <RadioButton
              alt="great mood"
              checked={moodLevel === 'mood-level-5'}
              onChange={() => handleMoodChange('mood-level-5')}
            />
          </div>
          <div className="flex flex-row justify-between w-full uppercase">
            <p>Unzufrieden</p>
            <p>Sehr zufrieden</p>
          </div>
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button title={buttonTitle} onClick={nextStep} />
      </ButtonContainer>
    </>
  )
}
