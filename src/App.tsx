import React, {useState} from 'react';
import Buttons from './components/Buttons'
import Options from './components/Options'
import Display from './components/Display'
import timeParser from './utility/timeParser'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
height: 80%;
position: absolute;
margin: auto;
top: 0;
right: 0;
bottom: 0;
left: 0;
border: 2px solid #5C87FF;
`



function App() {

  const [sessionLength,setSessionLength] = useState(25);
  const [breakLength,setBreakLength] = useState(5);
  const [breakTimeLeft,setBreakTimeLeft] = useState(timeParser(3));
  const [timeLeft,setTimeLeft] = useState(timeParser(2));
  const [isBreakRunning, setIsBreakRunning] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <Wrapper>
      <Options setSessionLength={setSessionLength}
               setBreakLength={setBreakLength}
               breakTimeLeft={breakTimeLeft}
               setBreakTimeLeft={setBreakTimeLeft}
               sessionLength={sessionLength}
               breakLength={breakLength}
               timeLeft={timeLeft}
               setTimeLeft={setTimeLeft}
      />
      <Display sessionLength={sessionLength} breakLength={breakLength}/>
      <Buttons />
    </Wrapper>
  );
}

export default App;
