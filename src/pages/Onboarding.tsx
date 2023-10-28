import { Header } from '../components/Header'
import { GameStepProps } from './types'

export const Onboarding = ({ handleNext }: GameStepProps) => {
  // const { trigger } = useOutletContext() as { trigger: () => void | undefined }

  return (
    <>
      <Header title={'Das erwartet euch'} section={'Zu Beginn'} />
      <div className="text-center space-y-3">
        <div>
          <p>Streitlösung in ca. 30 min.</p>
          <p>Ein Prozess in 3 Phasen.</p>
        </div>
        <h3 className="text-xl font-semibold">Ein strukturierter Ablauf:</h3>
        <ul className="list-disc ml-5 text-left">
          <li>Ihr habt beide genug Zeit</li>
          <li>Ihr kommt beide zu Wort</li>
          <li>Ihr müsst euch gegenseitig zuhören</li>
        </ul>
      </div>
      <button onClick={handleNext}>WEITER</button>
    </>
  )
}
