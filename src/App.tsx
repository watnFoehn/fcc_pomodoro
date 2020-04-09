import React, {useState} from 'react';
import Buttons from './components/Buttons'
import Options from './components/Options'
import Display from './components/Display'
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
  const [breakTimeLeft,setBreakTimeLeft] = useState(300);
  const [timeLeft,setTimeLeft] = useState(1500);
  const [isBreakRunning, setIsBreakRunning] = useState(false);
  //const [isTimerRunning, setIsTimerRunning] = useState(false);

  let timerId:any;

  const handleResetButton = () => {
    setBreakLength(5);
    setSessionLength(25);
    setBreakTimeLeft(300);
    setTimeLeft(1500);
    setIsBreakRunning(false);
    
    clearInterval(timerId);
    timerId = null;
    /* let beep = document.querySelector('#beep');
    beep.pause();
    beep.currentTime = 0; */
  }

  const handleOptionsButtons = (id:string) => {
    /* if(this.timerId) {
      return;
    } */
    switch(id) {
      case 'break-increment':
        if(breakLength >= 60) {
          return;
        }
        setBreakLength(breakLength + 1);
        setBreakTimeLeft((breakLength + 1) * 60);
        break;
      case 'break-decrement':
        if(breakLength <= 1) {
          return;
        }
        setBreakLength(breakLength - 1);
        setBreakTimeLeft((breakLength - 1) * 60);
        break;
      case 'session-increment':
        if(sessionLength >= 60) {
          return;
        }
        setSessionLength(sessionLength + 1);
        setTimeLeft((sessionLength + 1) * 60);
        break;
      case 'session-decrement':
        if(sessionLength <= 1) {
          return;
        }
        setSessionLength(sessionLength - 1);
        setTimeLeft((sessionLength - 1) * 60);
        break;
      default:
        break;
    }
  }

  return (
    <Wrapper>
      <Options handleOptionsButtons={handleOptionsButtons} />
      <Display sessionLength={sessionLength} breakLength={breakLength} timeLeft={timeLeft} breakTimeLeft={breakTimeLeft}/>
      <Buttons handleResetButton={handleResetButton}/>
    </Wrapper>
  );
}

export default App;
