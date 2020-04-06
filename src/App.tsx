import React from 'react';
import Buttons from './components/Buttons'
import Options from './components/Options'
import AllTypographyExample from './components/Display'
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
  return (
    <Wrapper>
      <Options />
      <AllTypographyExample/ >
      <Buttons />
    </Wrapper>
  );
}

export default App;
