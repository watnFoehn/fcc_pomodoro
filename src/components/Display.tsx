import React from 'react';
import styled from 'styled-components'
import timeParser from '../utility/timeParser'

const Wrapper = styled.div`
  text-align: center;
`

type Props = {timeLeft: any, breakTimeLeft: any, isBreakRunning: boolean }

const Display = (props: Props) =>
(
  <Wrapper>
    <div id="timer-label"><h3>{props.isBreakRunning  ? 'Break': 'Session' }</h3></div>
    <div id="time-left"><h2>{props.isBreakRunning  ? timeParser(props.breakTimeLeft) : timeParser(props.timeLeft)}</h2></div>
  </Wrapper>
)

export default Display;