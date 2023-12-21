// ErrorToast.js

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

type ErrorToastProps = {
  message: string
  timeout: number
  onClose: () => void
}

const ErrorToast = ({ message, timeout, onClose }: ErrorToastProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      onClose()
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout, onClose])

  return (
    <div
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } fixed bottom-0 right-0 m-4 p-4 bg-red-500 text-white rounded shadow-lg transition-opacity duration-500 flex items-center justify-between`}
    >
      <p>{message}</p>
      <button onClick={onClose} className="text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

ErrorToast.propTypes = {
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ErrorToast
