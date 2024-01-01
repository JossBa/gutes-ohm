import { useState } from 'react'
import { AnimatedSlope } from '../components/AnimatedSlope'

export const Test = () => {
  const [start, setStart] = useState(false)
  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-hidden items-center text-center p-5">
      {/** Container for navigation */}
      <div className="">Navbar</div>
      {/** Container for header */}
      <div className="">Header</div>
      <AnimatedSlope animate={start} animationDuration={60} />
      {/** Container for content */}
      <div className="flex-1 overflow-y-auto">
        Content
        <br />
        <p>
          dvh stands for dynamic view height, and dvb ("dynamic view block") is the logical version.
          It's a relatively new CSS unit of length that recently became supported in all modern web
          browsers. dvh is like vh but fixes the address bar issue when you use 100vh on mobile.
          Also reset margin-block on body, otherwise you'll get a small vertical scroll bar when the
          children within body are less than 100% of the browser's block size:
        </p>
        Content
        <br />
        Content
        <br />
        <p>
          dvh stands for dynamic view height, and dvb ("dynamic view block") is the logical version.
          It's a relatively new CSS unit of length that recently became supported in all modern web
          browsers. dvh is like vh but fixes the address bar issue when you use 100vh on mobile.
          Also reset margin-block on body, otherwise you'll get a small vertical scroll bar when the
          children within body are less than 100% of the browser's block size:
        </p>
        Content
        <br />
        Content
        <br />
        <p>
          dvh stands for dynamic view height, and dvb ("dynamic view block") is the logical version.
          It's a relatively new CSS unit of length that recently became supported in all modern web
          browsers. dvh is like vh but fixes the address bar issue when you use 100vh on mobile.
          Also reset margin-block on body, otherwise you'll get a small vertical scroll bar when the
          children within body are less than 100% of the browser's block size:
        </p>
        Content
        <br />
        Content
        <br />
        <p>
          dvh stands for dynamic view height, and dvb ("dynamic view block") is the logical version.
          It's a relatively new CSS unit of length that recently became supported in all modern web
          browsers. dvh is like vh but fixes the address bar issue when you use 100vh on mobile.
          Also reset margin-block on body, otherwise you'll get a small vertical scroll bar when the
          children within body are less than 100% of the browser's block size:
        </p>
        Content
        <br />
        <p>
          dvh stands for dynamic view height, and dvb ("dynamic view block") is the logical version.
          It's a relatively new CSS unit of length that recently became supported in all modern web
          browsers. dvh is like vh but fixes the address bar issue when you use 100vh on mobile.
          Also reset margin-block on body, otherwise you'll get a small vertical scroll bar when the
          children within body are less than 100% of the browser's block size:
        </p>{' '}
        Content
        <br />
        <p>
          dvh stands for dynamic view height, and dvb ("dynamic view block") is the logical version.
          It's a relatively new CSS unit of length that recently became supported in all modern web
          browsers. dvh is like vh but fixes the address bar issue when you use 100vh on mobile.
          Also reset margin-block on body, otherwise you'll get a small vertical scroll bar when the
          children within body are less than 100% of the browser's block size:
        </p>
      </div>
      <div className="bg-blue-400 w-full">
        <button onClick={() => setStart(!start)}>Start Animation</button>
        <br />
        Buttons
        <br />
        Buttons
      </div>
    </div>
  )
}
