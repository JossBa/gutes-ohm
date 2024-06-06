import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Solution, selectSolutions } from '../../game/gameSlice'

const CheckListItem = ({
  index,
  item,
  handleSelect,
}: {
  index: number
  item: Solution
  handleSelect: (item: Solution) => void
}) => {
  const [selected, setSelected] = useState(false)
  const onItemPress = () => {
    setSelected(!selected)
    handleSelect(item)
  }
  return (
    <label htmlFor={`checkbox_${index}`} className="flex items-top space-x-4" key={index}>
      <input
        id={`checkbox_${index}`}
        type="checkbox"
        className="h-7 w-7 text-anthrazit border-none outline-none focus:ring-0"
        required
        checked={selected}
        onChange={onItemPress}
      />
      <p className="text-left break-words w-fit list-none font-sourceSerif"> {item.solution}</p>
    </label>
  )
}
export const PhaseThreeSelectSolutions = ({ nextStep }: GameStepProps) => {
  const { allSolutions } = useSelector((state: RootState) => state.game)
  const [selectedItems, setSelectedItems] = useState<Solution[]>([])
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const handleSelect = (item: Solution) => {
    setError(false)
    if (!selectedItems.find((i) => i.id === item.id)) {
      setSelectedItems([...selectedItems, item])
    } else {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id))
    }
  }

  const handleSubmit = () => {
    if (selectedItems.length === 0) {
      setError(true)
    } else {
      dispatch(selectSolutions(selectedItems))
      nextStep()
    }
  }
  return (
    <>
      <Header title={`Erste Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="w-full flex flex-col items-center space-y-6 font-sourceSerif">
          {allSolutions.length === 0 ? (
            <p>{`Wir konnten leider keine Lösungsvorschläge finden.`}</p>
          ) : (
            <p>{`Hier sind eure Lösungsvorschläge. Entscheidet gemeinsam, welche davon ihr ausprobieren
            möchtet.`}</p>
          )}
          <div className="space-y-4 w-full px-4">
            {allSolutions.map((item, index) => (
              <CheckListItem key={index} index={index} item={item} handleSelect={handleSelect} />
            ))}
          </div>
        </div>
        {error && (
          <p className="animate-shake animate-once text-red-600 text-base mb-2 pl-2">
            Bitte wählt mindestens einen Lösungsvorschlag aus bevor ihr weiter macht.
          </p>
        )}
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Wählen" onClick={handleSubmit} />
      </ButtonContainer>
    </>
  )
}
