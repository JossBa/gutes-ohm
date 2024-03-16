import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { solutions } from '../../game/gameSlice'
import { usePlayers } from '../../hooks/usePlayers'
import { RootState } from '../../app/store'

export const PhaseThreeSolutions = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer } = usePlayers()
  const { solutionsPlayerA, solutionsPlayerB } = useSelector((state: RootState) => state.game)
  const [items, setItems] = useState<string[]>(
    activePlayer === 'player1' ? solutionsPlayerA : solutionsPlayerB
  )
  const [currentItem, setCurrentItem] = useState<string>('')
  const [editItem, setEditItem] = useState<string>('')
  const [shouldShowInputField, setShouldShowInputField] = useState<boolean>(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const dispatch = useDispatch()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleAddItem = (item: string) => {
    let list
    if (editItem) {
      list = items.map((i) => (i === editItem ? item : i))
    } else {
      list = [...items, item]
    }
    setItems(list)
    setShouldShowInputField(false)
    setCurrentItem('')
    setEditItem('')
  }

  const handleRemoveItem = (item: string) => {
    setItems(items.filter((i) => i !== item))
    setShouldShowInputField(false)
    setCurrentItem('')
  }

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem(currentItem)
      setShouldShowInputField(false)
    }
  }

  const handleEditItem = (item: string) => {
    setCurrentItem(item)
    setEditItem(item)
    setShouldShowInputField(true)
  }

  useEffect(() => {
    if (shouldShowInputField && inputRef.current) {
      inputRef.current.focus()
    } else {
      scrollToTop()
    }
  }, [inputRef, shouldShowInputField])

  const handleSubmitItems = () => {
    dispatch(solutions({ player: activePlayer, solutions: items }))
    nextStep()
  }

  return (
    <>
      <Header title={`Erste Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="space-y-2 w-full">
            {!shouldShowInputField && items.length === 0 ? (
              <p>{`Danke. Nun schreibt gemeinsam die Lösungsoptionen für ${currentPlayer} auf.`}</p>
            ) : (
              <>
                {items.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleEditItem(item)}
                      className="text-left break-words bg-white p-2 mx-4 w-fit list-none"
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
        <div className="w-full px-4">
          {!shouldShowInputField && (
            <button
              className={`min-w-[220px] p-3 text-lg font-medium font-sourceSerif  bg-transparent border-2 border-anthrazit text-anthrazit`}
              onClick={() => setShouldShowInputField(true)}
            >
              + Vorschlag hinzufügen
            </button>
          )}
          {shouldShowInputField && (
            <div className="w-full mb-10">
              <label>
                <textarea
                  ref={inputRef}
                  className={`w-full overflow-hidden border-1 border-anthrazit placeholder-opacity-75 placeholder-greymedium`}
                  name="solution"
                  required
                  placeholder="Lösungsvorschlag..."
                  value={currentItem}
                  onChange={(e) => {
                    setCurrentItem(e.target.value)
                  }}
                  onKeyDown={handleInputKeyPress}
                  autoComplete="off"
                />
                <div className="flex justify-between text-sm font-josefin uppercase mt-2">
                  <span onClick={() => handleRemoveItem(currentItem)}>
                    {currentItem.length > 0 ? 'löschen' : 'abbrechen'}
                  </span>
                  <span onClick={() => handleAddItem(currentItem)}>speichern</span>
                </div>
              </label>
            </div>
          )}
        </div>
        <Button onClick={handleSubmitItems} title={`weiter`} />
      </ButtonContainer>
    </>
  )
}
