import React from 'react'

interface RadioButtonProps {
  checked: boolean
  onChange: () => void
  alt: string
}

const RadioButton: React.FC<RadioButtonProps> = ({ checked, onChange, alt }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input alt={alt} type="radio" className="hidden" checked={checked} onChange={onChange} />
      <div
        className={`rounded-full outline-none shadow-none ${
          checked
            ? 'w-[40px] h-[40px] bg-anthrazit border-2 border-transparent'
            : 'w-[18px] h-[18px] m-[11px] bg-transparent border-2 border-anthrazit'
        }`}
      ></div>
    </label>
  )
}

export default RadioButton
