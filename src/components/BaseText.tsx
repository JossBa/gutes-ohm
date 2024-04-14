export const BaseText = ({ text, italic }: { text: string; italic?: 'italic' }) => {
  return <p className={`font-sourceSerif text-lg font-semibold ${italic}`}>{text}</p>
}
