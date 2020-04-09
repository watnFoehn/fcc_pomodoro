import React from 'react';
import { Button } from 'hacker-ui';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

type Props = { handleOptionsButtons: Function }


const Options = (props:Props) => {

  const {handleOptionsButtons  } = props;

  return (
  <div>
    <Wrapper>
      <StyledButton variant="outlined" id="session-increment" onClick={() => handleOptionsButtons("session-increment")}>increment session</StyledButton>
      <StyledButton variant="outlined" id="session-decrement" onClick={() => handleOptionsButtons("session-decrement")}>decrement session</StyledButton>
    </Wrapper>
    <Wrapper>
      <StyledButton variant="outlined" id="break-increment" onClick={() => handleOptionsButtons("break-increment")}>increment break</StyledButton>
      <StyledButton variant="outlined" id="break-decrement" onClick={() => handleOptionsButtons("break-decrement")}>decrement break</StyledButton>
    </Wrapper>
  </div>
)
}

export default Options;