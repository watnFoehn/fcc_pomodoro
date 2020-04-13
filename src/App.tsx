import React, { Component } from 'react';
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

class App extends Component {
  timerId:any = null;
  
    state = {
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      breakTimeLeft: 300,
      isBreakRunning: false
    }
    
  handleResetButton = () => {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timeLeft: 1500,
      breakTimeLeft: 300,
      isBreakRunning: false
    })
    clearInterval(this.timerId);
    this.timerId = 0;
    //TODO: this beep needs another type than any
    let beep:any = document.querySelector('#beep');
    beep.pause();
    beep.currentTime = 0;
  }

   handleOptionsButtons = (id:string) => {
    if(this.timerId) {
      return;
    }
    switch(id) {
      case 'break-increment':
        if(this.state.breakLength >= 60) {
          return;
        }
        this.setState(state => ({
          breakLength: this.state.breakLength + 1,
          breakTimeLeft: (this.state.breakLength + 1) * 60,
        }));
        break;
      case 'break-decrement':
        if(this.state.breakLength <= 1) {
          return;
        }
        this.setState(state => ({
          breakLength: this.state.breakLength - 1,
          breakTimeLeft: (this.state.breakLength - 1) * 60,
        }));
        break;
      case 'session-increment':
        if(this.state.sessionLength >= 60) {
          return;
        }
        this.setState(state => ({
          sessionLength: this.state.sessionLength + 1,
          timeLeft: (this.state.sessionLength + 1) * 60,
        }));
        break;
      case 'session-decrement':
        if(this.state.sessionLength <= 1) {
          return;
        }
        this.setState(state => ({
          sessionLength: this.state.sessionLength - 1,
          timeLeft: (this.state.sessionLength - 1) * 60,
        }));
        break;
      default:
        break;
    }
  }

   handleStartButton = () => {
    if(this.state.isBreakRunning) {
      if(this.timerId) {
        this.setState(state => (
          {breakTimeLeft: this.state.breakTimeLeft}
        ))
        clearInterval(this.timerId);
        this.timerId = 0;
        return;
      }
      this.timerId = setInterval(() => {
        this.setState(state => (
          {breakTimeLeft: this.state.breakTimeLeft - 1}
        ))
        },
        1000);
    } else {
      if(this.timerId) {
        this.setState(state => (
          {breakTimeLeft: this.state.breakTimeLeft}
        ))
        clearInterval(this.timerId);
        this.timerId = 0;
        return;
      }
      this.timerId = setInterval(() => {
        this.setState(state => (
          {timeLeft: this.state.timeLeft - 1}
        ))
      },
      1000);
    }
  }

 componentDidUpdate = () => {
  if(this.state.timeLeft < 0) {
    clearInterval(this.timerId);
    let beep:any = document.querySelector('#beep');
    beep.play();
    this.setState(state => {
      return {
        timeLeft: this.state.sessionLength * 60,
        isBreakRunning: !this.state.isBreakRunning
      }
    });    
    this.timerId = setInterval(() => {
      this.setState(state => (
        {breakTimeLeft: this.state.breakTimeLeft - 1}
      ))
      },
      1000);
  }
  if(this.state.breakTimeLeft < 0) {
    clearInterval(this.timerId);
    let beep:any = document.querySelector('#beep');
    beep.play();
    this.setState(state => {
      return {
        breakTimeLeft: this.state.breakLength * 60,
        isBreakRunning: !this.state.isBreakRunning
      }
    });
    this.timerId = setInterval(() => {
      this.setState(state => (
        {timeLeft: this.state.timeLeft - 1}
      ))
      },
      1000);
  }
}  
 componentWillUnmount = () => {
  clearInterval(this.timerId);
}

render() {
  return (
    <Wrapper>
      <Options handleOptionsButtons={this.handleOptionsButtons} sessionLength={this.state.sessionLength} breakLength={this.state.breakLength} />
      <Display timeLeft={this.state.timeLeft} breakTimeLeft={this.state.breakTimeLeft} isBreakRunning={this.state.isBreakRunning}/>
      <Buttons handleResetButton={this.handleResetButton} handleStartButton={this.handleStartButton}/>
      <audio src="tone.wav" id="beep"></audio>
    </Wrapper>
  );
}
}


export default App;
