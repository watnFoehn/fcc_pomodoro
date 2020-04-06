import React from 'react';
import Buttons from './components/Buttons'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto;
  width: 50%;
  border: 2px solid #5C87FF;
`

function App() {
  return (
    <Wrapper>
    <Buttons />
    </Wrapper>
  );
}

export default App;
