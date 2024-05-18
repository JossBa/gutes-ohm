import icon from '../assets/OHM_Logo.png'

export const Hero = () => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <div className="space-y-6">
        <div className="max-w-lg px-7">
          <img src={icon} alt="ohm-logo" />
        </div>
        <p className="text-center font-sourceSerif italic text-xl font-bold">
          Die App für gutes Streiten.
        </p>
      </div>
    </div>
  )
}
