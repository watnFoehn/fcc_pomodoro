import React from 'react';
import { Button } from 'hacker-ui';
import timeParser from '../utility/timeParser'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`
type Props = {
              setSessionLength: Function,
              setBreakLength: Function,
              breakLength: number,
              sessionLength: number,
              setBreakTimeLeft: Function,
              breakTimeLeft: {
                timeToDisplay: string,
                timeToCalculate:number
              },
              timeLeft: {
                timeToDisplay: string,
                timeToCalculate:number
              },
              setTimeLeft: Function
            }


const Options = (props:Props) => {

  const {breakLength, sessionLength, setSessionLength, setBreakLength, breakTimeLeft, setBreakTimeLeft, timeLeft, setTimeLeft  } = props;

  const handleBreakDecrement = () => {
    breakLength > 1 ? setBreakLength(breakLength-1) : setBreakLength(1)
    let newTime = timeParser((breakLength-1)*60)
    breakTimeLeft.timeToCalculate > 60 ? setBreakTimeLeft(newTime) : setBreakTimeLeft({timeToDisplay: "01:00", timeToCalculate: 60})
  }

  const handleBreakIncrement = () => {
    breakLength < 60 ? setBreakLength(breakLength+1) : setBreakLength(breakLength)
    let newTime = timeParser((breakLength+1)*60)
    breakTimeLeft.timeToCalculate > 3600 ? setBreakTimeLeft(newTime) : setBreakTimeLeft({timeToDisplay: "60:00", timeToCalculate: 3600})
  }

  const handleSessionDecrement = () => {
    sessionLength > 1 ? setSessionLength(sessionLength-1) : setSessionLength(1)
    let newTime = timeParser((sessionLength-1)*60)
    timeLeft.timeToCalculate > 60 ? setTimeLeft(newTime) : setTimeLeft({timeToDisplay: "01:00", timeToCalculate: 60})
  }
  
  const handleSessionIncrement = () => {
    sessionLength < 60 ? setSessionLength(sessionLength+1) : setSessionLength(sessionLength)
    let newTime = timeParser((sessionLength+1)*60)
    timeLeft.timeToCalculate < 3600 ? setTimeLeft(newTime) : setTimeLeft({timeToDisplay: "60:00", timeToCalculate: 3600})
  }

  return (
  <div>
    <div>
      <StyledButton variant="outlined" id="session-increment" onClick={handleSessionIncrement}>increment session</StyledButton>
      <StyledButton variant="outlined" id="session-decrement" onClick={handleSessionDecrement}>decrement session</StyledButton>
    </div>
    <div>
      <StyledButton variant="outlined" id="break-increment" onClick={handleBreakIncrement}>increment break</StyledButton>
      <StyledButton variant="outlined" id="break-decrement" onClick={handleBreakDecrement}>decrement break</StyledButton>
    </div>
  </div>
)
}

export default Options;