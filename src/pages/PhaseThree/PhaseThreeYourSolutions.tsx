import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { BaseText } from '../../components/BaseText'

export const PhaseThreeYourSolutions = ({ nextStep }: GameStepProps) => {
  const { selectSolutions } = useSelector((state: RootState) => state.game)

  return (
    <>
      <Header title={`Eure ausgewählten Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="space-y-4 w-full font-sourceSerif">
            {selectSolutions.length === 0 ? (
              <p>{`Wir konnten leider keine Lösungen finden.`}</p>
            ) : (
              <>
                <BaseText text={`Yeah!\nDas sind eure individuelle Lösungen:`} />
                {selectSolutions.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`text-left break-words p-2 mx-4 w-fit list-none ${
                        item.player === 'player1' ? 'bg-yellowlight' : 'bg-bluelight'
                      }`}
                    >
                      {item.solution}
                    </li>
                  )
                })}
              </>
            )}
          </div>
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Weiter" onClick={nextStep} />
      </ButtonContainer>
    </>
  )
}
