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
export const PhaseThreeSelectSolutions = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer } = usePlayers()
  const { solutionsPlayerA, solutionsPlayerB } = useSelector((state: RootState) => state.game)
  const items = activePlayer === 'player1' ? solutionsPlayerA : solutionsPlayerB
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const dispatch = useDispatch()

  const handleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item))
    } else {
      setSelectedItems([...selectedItems, item])
    }
  }

  const handleSubmit = () => {
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
            <p>{`Wir konnten leider keine Lösungen für ${currentPlayer} finden.`}</p>
          ) : (
            <p>{`Hier sind eure Lösungsvorschläge. Entscheidet gemeinsam, welche davon ihr ausprobieren
            möchtet.`}</p>
          )}
          <div className="space-y-2 w-full">
            {items.map((item, index) => (
              <ListItem index={index} item={item} handleSelect={() => handleSelect(item)} />
            ))}
          </div>
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button title="Wählen" onClick={handleSubmit} />
      </ButtonContainer>
    </>
  )
}
