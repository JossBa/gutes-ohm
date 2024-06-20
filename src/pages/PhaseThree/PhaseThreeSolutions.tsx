import { GameStepProps } from './../types'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonContainer } from '../../components/ButtonContainer'
import { ContentWrapper } from '../../components/ContentWrapper'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Solution, solutions } from '../../game/gameSlice'
import { usePlayers } from '../../hooks/usePlayers'
import { RootState } from '../../app/store'
import { scrollToTop } from '../../utils/scrollToTop'
import { v4 as uuidv4 } from 'uuid'
import { BaseText } from '../../components/BaseText'

export const PhaseThreeSolutions = ({ nextStep }: GameStepProps) => {
  const { activePlayer, currentPlayer } = usePlayers()
  const { allSolutions } = useSelector((state: RootState) => state.game)
  // the current player solutions
  const [playerSolutions, setPlayerSolutions] = useState<Solution[]>(
    allSolutions.filter((s) => s.player === activePlayer)
  )
  const [error, setError] = useState<boolean>(false)
  const [currentProposal, setCurrentProposal] = useState<string>('')
  const [editMode, setEditMode] = useState<boolean>(false)
  const [editIndex, setEditIndex] = useState<string>('')
  const [shouldShowInputField, setShouldShowInputField] = useState<boolean>(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const dispatch = useDispatch()

  const handleAddItem = (proposedSolution: string) => {
    if (proposedSolution !== '') {
      if (editMode) {
        const updatedSolution: Solution = {
          id: editIndex,
          player: activePlayer!,
          solution: proposedSolution,
        }
        setPlayerSolutions(playerSolutions.map((i) => (i.id === editIndex ? updatedSolution : i)))
        dispatch(
          solutions({
            solutions: allSolutions.map((i) => (i.id === editIndex ? updatedSolution : i)),
          })
        )
        setEditMode(false)
        setEditIndex('')
      } else {
        const newSolution: Solution = {
          id: uuidv4(),
          player: activePlayer!,
          solution: proposedSolution,
        }
        setPlayerSolutions([...playerSolutions, newSolution])
        dispatch(solutions({ solutions: [...allSolutions, newSolution] }))
      }
    }
    setShouldShowInputField(false)
    setCurrentProposal('')
  }

  const handleRemoveItem = (index: string) => {
    setPlayerSolutions(playerSolutions.filter((i) => i.id !== index))
    dispatch(solutions({ solutions: allSolutions.filter((i) => i.id !== index) }))
    setShouldShowInputField(false)
    setCurrentProposal('')
  }

  const handleInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddItem(currentProposal)
      setShouldShowInputField(false)
    }
  }

  const handleEditItem = (index: string) => {
    setEditMode(true)
    setEditIndex(index)
    setCurrentProposal(allSolutions.find((i) => i.id === index)?.solution ?? '')
    setShouldShowInputField(true)
  }

  useEffect(() => {
    if (shouldShowInputField && inputRef.current) {
      setError(false)
      inputRef.current.focus()
    } else {
      scrollToTop()
    }
  }, [inputRef, shouldShowInputField])

  const handleSubmitItems = () => {
    scrollToTop()
    if (playerSolutions.length === 0) {
      setError(true)
    } else {
      setError(false)
      dispatch(solutions({ solutions: allSolutions }))
      nextStep()
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'inherit'
      const scrollHeight = inputRef.current.scrollHeight
      inputRef.current.style.height = `${scrollHeight}px`
    }
  }, [currentProposal])

  return (
    <>
      <Header title={`Erste Lösungen`} section={'Phase 3/3'}></Header>
      <ContentWrapper>
        <img src={`img/joint-players.svg`} alt="player2 symbol" className="inline self-center" />
        <div className="mx-2 space-y-4 ">
          <div className="w-full flex flex-col items-center">
            <div className="w-full space-y-4 text-left">
              {playerSolutions.length === 0 && (
                <BaseText
                  text={`Schreibt jetzt auf, was ihr tun könnt, damit ${currentPlayer} zufriedener wird.`}
                />
              )}
              {playerSolutions.length > 0 && (
                <div className="space-y-2 overflow-auto">
                  {playerSolutions.map((item) => {
                    return (
                      <div key={item.id} className="flex space-x-1">
                        <li
                          onClick={() => handleEditItem(item.id)}
                          className="list-none text-left break-words break-all bg-white p-2"
                        >
                          {item.solution}
                        </li>
                        <img
                          src={`img/delete.svg`}
                          alt="delete solution"
                          className="inline self-start w-6 h-6 cursor-pointer"
                          onClick={() => handleRemoveItem(item.id)}
                        />
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex justify-center">
            {!shouldShowInputField && (
              <div className="space-y-3 w-full text-left">
                <button
                  className={`min-w-[218px] p-2 text-lg font-medium font-sourceSerif bg-transparent border-2 border-anthrazit text-anthrazit`}
                  onClick={() => setShouldShowInputField(true)}
                >
                  + Vorschlag hinzufügen
                </button>
              </div>
            )}
            {shouldShowInputField && (
              <div className="w-full mb-10">
                <div className="flex space-x-2">
                  <label className="md:w-2/3">
                    <textarea
                      ref={inputRef}
                      rows={1}
                      className={`resize-y w-full border-2 border-anthrazit focus:border-bluedark focus:outline-none focus:ring-0 placeholder-opacity-75 placeholder-greymedium`}
                      name="solution"
                      required
                      placeholder="Vorschlag hinzufügen"
                      value={currentProposal}
                      onChange={(e) => {
                        setCurrentProposal(e.target.value)
                      }}
                      onKeyDown={handleInputKeyPress}
                      autoComplete="off"
                    />
                  </label>
                  <img
                    src={`img/send.svg`}
                    alt="add solution"
                    className="inline self-start w-[40px] cursor-pointer"
                    onClick={() => {
                      handleAddItem(currentProposal)
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          {error && (
            <div className="w-full flex flex-col items-center">
              <p className="animate-shake animate-once text-red-600 text-base mb-2 pl-2 md:w-1/2 w-full">
                Versucht mindestens einen Lösungsvorschlag zu finden bevor ihr weiter macht.
              </p>
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
