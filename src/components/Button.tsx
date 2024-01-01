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
      className={`min-w-[220px] h-14 p-4 text-lg font-bold font-josefin uppercase tracking-widest ${styling[buttonStyle]} `}
      onClick={onClick}
    >
      {title}
    </button>
  )
}
