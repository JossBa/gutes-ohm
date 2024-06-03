import { RootState } from '../app/store'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { previousStep } from '../game/gameSlice'
import { useState } from 'react'
import { Button } from './Button'
import { ButtonContainer } from './ButtonContainer'
import React from 'react'

interface IHeader {
  title?: string
  section?: string
  shouldOnlyShowBackButton?: boolean
  handlePrevious?: () => void
  hideTitle?: boolean
}
export const Header = React.memo(
  ({ title, section, shouldOnlyShowBackButton, handlePrevious, hideTitle }: IHeader) => {
    const { currentStepId } = useSelector((state: RootState) => state.game)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const handleExit = () => {
      setShowModal(true)
    }

    const closeModal = () => {
      setShowModal(false)
    }

    const confirmExit = () => {
      navigate('/')
    }

    const handlePreviousStep = () => {
      if (currentStepId === 0) {
        navigate('/')
      } else {
        dispatch(previousStep())
      }
    }

    const handleBreak = () => {
      navigate('/pause')
    }

    return (
      <div
        id="navigation-bar"
        className={`sticky top-0 left-0 right-0 pt-2 z-50 flex flex-col justify-between w-full bg-transparent`}
      >
        <div className="flex justify-between w-full">
          <button onClick={handlePrevious ? handlePrevious : handlePreviousStep}>
            <img className="p-1" src="/img/back.svg" alt="back-icon" />
          </button>
          {!shouldOnlyShowBackButton && (
            <div className="flex items-end">
              <button onClick={handleBreak}>
                <img className="p-1" src="/img/pause.svg" alt="pause-icon" />
              </button>
              <button onClick={handleExit}>
                <img className="p-1" src="/img/exit.svg" alt="exit-icon" />
              </button>
            </div>
          )}
        </div>
        {!hideTitle && (
          <div className="w-full sticky pb-2 mb-2 top-14 bg-inherit">
            <h2 className="font-transat text-sm text-center font-semibold uppercase">{section}</h2>
            <h1 className="font-transat text-2xl text-center font-bold uppercase leading-normal">
              {title}
            </h1>
            <hr className="my-1 mx-auto border-anthrazit" />
          </div>
        )}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white px-8 pt-8 pb-1 shadow-lg">
              <h2 className="font-transat text-xl text-center font-bold uppercase my-3">
                Schade, dass ihr schon geht!
              </h2>
              <p>Seid ihr sicher, dass ihr den Prozess beenden möchtet?</p>
              <p>
                Euer Fortschritt wird leider nicht gespeichtert, aber wir arbeiten bereits an einer
                Lösung.
              </p>
              <ButtonContainer>
                <Button onClick={confirmExit} title="OK" />
                <Button onClick={closeModal} buttonStyle="secondary" title="Abbrechen" />
              </ButtonContainer>
            </div>
          </div>
        )}
      </div>
    )
  }
)
