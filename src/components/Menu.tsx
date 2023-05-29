import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-8 py-4 px-4 font-golos text-3xl w-96">
      <Link to="#ohm">OHM</Link>
      <Link to="/streiten">Start</Link>
      <Link to="#about">About</Link>
    </div>
  )
}

const MobileMenu = () => {
  const [toggle, setToggle] = useState(true)
  const showMenu = 'mobile-menu md:hidden'
  const hideMenu = 'mobile-menu md:hidden hidden'

  return (
    <>
      <div className="md:hidden flex items-center">
        <button
          className="mobile-menu-button"
          onClick={() => {
            setToggle(!toggle)
          }}
        >
          {toggle ? (
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            <svg
              className="w-12 h-12 p-2"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 94.926 94.926"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <g>
                  {' '}
                  <path d="M55.931,47.463L94.306,9.09c0.826-0.827,0.826-2.167,0-2.994L88.833,0.62C88.436,0.224,87.896,0,87.335,0 c-0.562,0-1.101,0.224-1.498,0.62L47.463,38.994L9.089,0.62c-0.795-0.795-2.202-0.794-2.995,0L0.622,6.096 c-0.827,0.827-0.827,2.167,0,2.994l38.374,38.373L0.622,85.836c-0.827,0.827-0.827,2.167,0,2.994l5.473,5.476 c0.397,0.396,0.936,0.62,1.498,0.62s1.1-0.224,1.497-0.62l38.374-38.374l38.374,38.374c0.397,0.396,0.937,0.62,1.498,0.62 s1.101-0.224,1.498-0.62l5.473-5.476c0.826-0.827,0.826-2.167,0-2.994L55.931,47.463z"></path>{' '}
                </g>{' '}
              </g>
            </svg>
          )}
        </button>
      </div>
      <div className={toggle ? hideMenu : showMenu}>
        <div className="flex flex-col font-golos text-3xl items-center p-4 space-y-8">
          <Link to="#ohm">OHM</Link>
          <Link to="/streiten">Start</Link>
          <Link to="#about">About</Link>
        </div>
      </div>
    </>
  )
}

export const Menu = () => {
  return (
    <div className="absolute bg-background w-full">
      <DesktopMenu />
      <MobileMenu />
    </div>
  )
}
