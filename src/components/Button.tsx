type ButtonProps = {
  title: string
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
  disabled?: boolean
  buttonStyle?: 'primary' | 'secondary'
}

const styling = {
  primary: 'bg-anthrazit text-slate-50',
  secondary: 'bg-transparent border-2 border-anthrazit text-anthrazit',
}

export const Button = ({ title, onClick, disabled, buttonStyle = 'primary' }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${
        buttonStyle === 'primary' ? 'min-w-[220px]' : 'min-w-[218px]'
      } p-3 text-base font-bold font-transat uppercase tracking-widest ${styling[buttonStyle]} `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
