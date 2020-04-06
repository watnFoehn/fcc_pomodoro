import React from 'react';
import { Button } from 'hacker-ui';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`

const Options = () =>
(
  <div>
    <StyledButton variant="outlined" id="break-decrement" >decrement break</StyledButton>
    <StyledButton variant="outlined" id="session-decrement">decrement session</StyledButton>
    <StyledButton variant="outlined" id="break-increment">increment break</StyledButton>
    <StyledButton variant="outlined" id="session-increment">increment session</StyledButton>
  </div>
)

export default Options;