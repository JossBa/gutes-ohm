type ButtonProps = {
  title: string
  onClick: (event: React.FormEvent<HTMLButtonElement>) => void
  disabled?: boolean
  style?: 'primary' | 'secondary'
}

const styling = {
  primary: 'bg-anthrazit text-slate-50',
  secondary: 'bg-transparent border-4 border-anthrazit text-anthrazit',
}

export const Button = ({ title, onClick, disabled, style = 'primary' }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`w-72 h-14 text-lg font-bold font-josefin uppercase tracking-widest ${styling[style]} `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
