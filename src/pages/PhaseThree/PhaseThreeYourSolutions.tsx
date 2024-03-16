import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'

export const PhaseThreeYourSolutions = ({ nextStep }: GameStepProps) => {
  const { selectedSolutions } = useSelector((state: RootState) => state.game)

  return (
    <>
      <Header title={`Eure ausgewählten Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="space-y-2 w-full">
            {selectedSolutions.length === 0 ? (
              <p>{`Wir konnten leider keine Lösungen finden.`}</p>
            ) : (
              <>
                {selectedSolutions.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`text-left break-words p-2 mx-4 w-fit list-none bg-yellowlight`}
                    >
                      {item}
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
