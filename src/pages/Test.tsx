import React, { useState } from 'react'
import { Header } from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { names } from '../game/gameSlice'
import { RootState } from '../app/store'
import { Button } from '../components/Button'
import { ButtonContainer } from '../components/ButtonContainer'
import { ContentWrapper } from '../components/ContentWrapper'
import { GameStepProps } from './types'
import { scrollToTop } from '../utils/scrollToTop'
import { BaseText } from '../components/BaseText'
import { InputLabel } from '../components/InputLabel'

export const Test = ({ nextStep }: GameStepProps) => {
  return (
    <>
      <Header title="Wer seid ihr?" section="TEST" />
      <ContentWrapper>
        <BaseText
          text={'Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.'}
        />
        <BaseText
          text={'Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.'}
        />
        <BaseText
          text={'Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.'}
        />
        <BaseText
          text={'Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.'}
        />
        <BaseText
          text={'Bitte tragt eure Namen ein. So kann OHM euch ideal durch euren Streit steuern.'}
        />
      </ContentWrapper>
      <ButtonContainer>
        <Button onClick={nextStep} title="Test" />
        <Button onClick={nextStep} title="Weiter" />
      </ButtonContainer>
    </>
  )
}
