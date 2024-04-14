import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePlayers } from '../../hooks/usePlayers'
import { RootState } from '../../app/store'
import { selectSolutions } from '../../game/gameSlice'

const ListItem = ({
  index,
  item,
  handleSelect,
}: {
  index: number
  item: string
  handleSelect: () => void
}) => {
  const [selected, setSelected] = useState(false)
  const onItemPress = () => {
    setSelected(!selected)
    handleSelect()
  }
  return (
    <li
      key={index}
      onClick={onItemPress}
      className={`text-left break-words p-2 mx-4 w-fit list-none ${
        selected ? 'bg-yellowlight' : 'bg-white'
      }`}
    >
      {item}
    </li>
  )
}

const CheckListItem = ({
  index,
  item,
  handleSelect,
}: {
  index: number
  item: string
  handleSelect: () => void
}) => {
  const [selected, setSelected] = useState(false)
  const onItemPress = () => {
    setSelected(!selected)
    handleSelect()
  }
  return (
    <label className="flex items-center space-x-4">
      <input
        type="checkbox"
        className="h-8 w-8 text-anthrazit border-none outline-none focus:ring-0"
        required
        checked={selected}
        onChange={() => {
          onItemPress()
        }}
      />
      <p className="`text-left break-words p-2 mx-4 w-fit list-none "> {item}</p>
    </label>
  )
}

export const PhaseThreeSelectSolutions = ({ nextStep }: GameStepProps) => {
  const { solutionsPlayerA, solutionsPlayerB } = useSelector((state: RootState) => state.game)
  const items = [...solutionsPlayerA, ...solutionsPlayerB]
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const handleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const anySelected = () => {
    if (selectedItems.length === 0) {
      setError(true)
      return false
    } else {
      setError(false)
      return true
    }
  }

  const handleSubmit = () => {
    if (!anySelected()) return
    dispatch(selectSolutions(selectedItems))
    nextStep()
  }
  return (
    <>
      <Header title={`Erste Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="w-full flex flex-col items-center space-y-4">
          {items.length === 0 ? (
            <p>{`Wir konnten leider keine Lösungsvorschläge finden.`}</p>
          ) : (
            <p>{`Hier sind eure Lösungsvorschläge. Entscheidet gemeinsam, welche davon ihr ausprobieren
            möchtet.`}</p>
          )}
          <div className="space-y-2 w-full">
            {items.map((item, index) => (
              <CheckListItem index={index} item={item} handleSelect={() => handleSelect(item)} />
            ))}
          </div>
        </div>
        {error && (
          <p className="text-red-500">Bitte wähle mindestens einen Lösungsvorschlag aus.</p>
        )}
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Wählen" onClick={handleSubmit} />
      </ButtonContainer>
    </>
  )
}
