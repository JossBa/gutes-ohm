// import { useSelector } from 'react-redux'
// import { ContentWrapper } from '../components/ContentWrapper'
// import { Header } from '../components/Header'
// import { RootState } from '../app/store'
// import { PlayerIcon } from '../components/PlayerIcon'
// import { ButtonContainer } from '../components/ButtonContainer'
// import { Button } from '../components/Button'
// import { AnimatedSlope } from '../components/AnimatedSlope'
// import { GameStepProps } from './types'
// import { useTimer } from '../components/Timer'

// export const PhaseOneExplain= ({ nextStep }: GameStepProps) => {
//   const {
//     step: { activePlayer },
//     playerA,
//     playerB,
//   } = useSelector((state: RootState) => state.game)
//   const currentPlayer = activePlayer === 'player1' ? playerA : playerB
//   const partnerPlayer = activePlayer === 'player1' ? playerB : playerA
//   const { handleStart, time, started, counting } = useTimer(180)

//   return (
//     <>
//       <AnimatedSlope animate={started} />
//       <Header title={currentPlayer} section={'Phase 1/3'} />
//       <ContentWrapper>
//         <h1 className="font-josefin text-8xl p-4 mb-4">{time}</h1>
//         <PlayerIcon player={activePlayer} display="full" />
//         <p className="font-sourceSerif text-xl font-semibold text-center">
//           Hey, {currentPlayer}! Teile {partnerPlayer} in drei Minuten deine Sicht auf den Konflikt
//           mit.{' '}
//         </p>
//         <PlayerIcon player={activePlayer === 'player1' ? 'player2' : 'player1'} display="outline" />
//         <p className="font-sourceSerif text-xl font-semibold text-center italic">
//           {partnerPlayer}, deine Aufgabe ist es, aktiv zuzuhören und nicht zu reden.
//         </p>
//       </ContentWrapper>
//       <ButtonContainer>
//         <Button
//           style={started && counting ? 'secondary' : 'primary'}
//           disabled={false}
//           title={started ? (counting ? 'Bin schon fertig' : 'Weiter') : 'Start'}
//           onClick={!started ? handleStart : nextStep}
//         />
//       </ButtonContainer>
//     </>
//   )
// }

export const x = 0
