import React, {useState, useEffect} from 'react';
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


let timerId:any;

function App() {
  
  const [sessionLength,setSessionLength] = useState(25);
  const [breakLength,setBreakLength] = useState(5);
  const [breakTimeLeft,setBreakTimeLeft] = useState(300);
  const [timeLeft,setTimeLeft] = useState(1500);
  const [isBreakRunning, setIsBreakRunning] = useState(false);
  

  const handleResetButton = () => {
    setBreakLength(5);
    setSessionLength(25);
    setBreakTimeLeft(300);
    setTimeLeft(1500);
    setIsBreakRunning(false);
    clearInterval(timerId);
    timerId = null;
    //TODO: this beep needs another type than any
    let beep:any = document.querySelector('#beep');
    beep.pause();
    beep.currentTime = 0;
  }

  const handleOptionsButtons = (id:string) => {
    if(timerId) {
      return;
    }
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

  const handleStartButton = () => {
    if(isBreakRunning) {
      if(timerId) {
        setBreakTimeLeft(breakTimeLeft)
        clearInterval(timerId);
        timerId = null;
        return;
      }
      timerId = setInterval(() => {
          setBreakTimeLeft(breakTimeLeft - 1 );
        },
        1000);
    } else {
      if(timerId) {
        setBreakTimeLeft(breakTimeLeft)
        clearInterval(timerId);
        timerId = null;
        return;
      }
      timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1 );
      },
      1000);
    }
  }

  useEffect(() => {
    if(timeLeft < 0) {
      clearInterval(timerId);
      let beep:any = document.querySelector('#beep');
      beep.play();     
      setTimeLeft(sessionLength * 60);
      setIsBreakRunning(!isBreakRunning);
      timerId = setInterval(() => {
        setBreakTimeLeft(breakTimeLeft - 1);
      },
      1000);
    }
    if(breakTimeLeft < 0) {
      clearInterval(timerId);
      let beep:any = document.querySelector('#beep');
      beep.play(); 
      setBreakTimeLeft(breakLength * 60);
      setIsBreakRunning(!isBreakRunning);
      timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      },
      1000);
    }
  });

console.log(timerId);

  return (
    <Wrapper>
      <Options handleOptionsButtons={handleOptionsButtons} sessionLength={sessionLength} breakLength={breakLength} />
      <Display timeLeft={timeLeft} breakTimeLeft={breakTimeLeft} isBreakRunning={isBreakRunning}/>
      <Buttons handleResetButton={handleResetButton} handleStartButton={handleStartButton}/>
      <audio src="tone.wav" id="beep"></audio>
    </Wrapper>
  );
}

export default App;
