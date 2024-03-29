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
import { scrollToTop } from '../../utils/scrollToTop'

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
    scrollToTop()
    dispatch(solutions({ player: activePlayer, solutions: items }))
    nextStep()
  }

  return (
    <>
      <Header title={`Erste Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="w-full flex flex-col items-center space-y-4">
          <div className="w-full">
            {!shouldShowInputField && items.length === 0 ? (
              <p>{`Danke. Nun schreibt gemeinsam die Lösungsoptionen für ${currentPlayer} auf.`}</p>
            ) : (
              <div className="mx-2 space-y-2">
                {items.map((item, index) => {
                  return (
                    <div className="flex space-x-1">
                      <li
                        key={index}
                        onClick={() => handleEditItem(item)}
                        className="text-left break-words  bg-white p-2"
                      >
                        {item}
                      </li>
                      <img
                        src={`img/delete.svg`}
                        alt="delete solution"
                        className="inline self-start w-6 h-6 cursor-pointer"
                        onClick={() => handleRemoveItem(item)}
                      />
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
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
            <div className="mb-10">
              <label>
                <div className="flex space-x-2">
                  <textarea
                    ref={inputRef}
                    className={`w-full overflow-hidden border-2 border-anthrazit focus:border-bluedark focus:outline-none focus:ring-0 placeholder-opacity-75 placeholder-greymedium`}
                    name="solution"
                    required
                    placeholder="Vorschlag hinzufügen"
                    value={currentItem}
                    onChange={(e) => {
                      setCurrentItem(e.target.value)
                    }}
                    onKeyDown={handleInputKeyPress}
                    autoComplete="off"
                  />
                  <img
                    src={`img/send.svg`}
                    alt="add solution"
                    className="inline self-start w-12 h-12 cursor-pointer"
                    onClick={() => handleAddItem(currentItem)}
                  />
                </div>
              </label>
            </div>
          )}
        </div>
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={handleSubmitItems} title={`weiter`} />
      </ButtonContainer>
    </>
  )
}
