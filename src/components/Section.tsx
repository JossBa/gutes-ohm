import React from 'react'

export const Section = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="basis-80 p-4 mx-2">
        <h2 className="text-center font-golos font-bold text-2xl py-8">Was ist OHM?</h2>
        <div className="bg-slate-400 h-px mx-8"></div>
        <p className="text-center font-golos text-base pt-10">
          Mit OHM holst du dir den Prozess der Streitlösung direkt aufs Handy. Wir beweisen, dass
          gutes Streiten alltagstauglich, simpel und zeitgemäß funktionieren kann. In einer App,
          ganz entspannt, egal wo du bist!
        </p>
      </div>
      <div className="basis-80 p-4 mx-2">
        <h2 className="text-center font-golos font-bold text-2xl py-8">Für wen ist OHM?</h2>
        <div className="bg-slate-400 h-px mx-8"></div>
        <p className="text-center font-golos text-base pt-10">
          OHM ist für alle, die eine neue Art des Streitens üben wollen. Die App ist für zwei
          Personen angelegt: ganz egal ob Paare, Familien, Kolleg:innen oder Freund:innen. Jede:r
          kann OHM ohne Vorkenntnisse nutzen.
        </p>
      </div>
      <div className="basis-80 p-4 mx-2">
        <h2 className="text-center font-golos font-bold text-2xl py-8">Wer steckt dahinter?</h2>
        <div className="bg-slate-400 h-px mx-8"></div>
        <p className="text-center font-golos text-base pt-10">
          4 Freund:innen, 2 Paare, eine Idee. Leonie (Mediatorin), Dave (Designer), Josephine
          (Entwicklerin) und Nimet (UX-Designerin). Wir wollen Mut zum Streiten machen und beweisen,
          dass gutes Streiten enorm viel Potenzial birgt.
        </p>
      </div>
    </div>
  )
}
