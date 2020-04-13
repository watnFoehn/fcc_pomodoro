import React from 'react';
import { Button } from 'hacker-ui';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  @media only screen and (min-width: 945px) {
    grid-template-columns: 200px 200px 200px 200px;
  }
  @media only screen and (max-width: 944px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 270px) {
    grid-template-columns: 1fr;
  }
  text-align: center;
` 

const LabelWrapper = styled.div`
  margin: 8px;
  padding: 8px;
`

const SessionLength = styled.h3``
const BreakLength = styled.h3``

type Props = { breakLength: number, sessionLength: number, handleOptionsButtons: Function }


const Options = (props:Props) => {

  const {handleOptionsButtons, sessionLength, breakLength  } = props;

  return (
    <Wrapper>
      <div>
        <StyledButton variant="outlined" id="session-increment" onClick={() => handleOptionsButtons("session-increment")}>increment session</StyledButton>
        <StyledButton variant="outlined" id="break-increment" onClick={() => handleOptionsButtons("break-increment")}>increment break</StyledButton>
      </div>  
      <div>
        <StyledButton variant="outlined" id="session-decrement" onClick={() => handleOptionsButtons("session-decrement")}>decrement session</StyledButton>
        <StyledButton variant="outlined" id="break-decrement" onClick={() => handleOptionsButtons("break-decrement")}>decrement break</StyledButton>
      </div>  
      <div>
        <div id="session-length"><SessionLength>{sessionLength}</SessionLength></div>
        <div id="break-length"><BreakLength>{breakLength}</BreakLength></div>
      </div>  
      <div>
        <LabelWrapper id="session-label">session length</LabelWrapper>
        <LabelWrapper id="break-label">break length</LabelWrapper>
      </div>  
    </Wrapper>
)
}

export default Options;