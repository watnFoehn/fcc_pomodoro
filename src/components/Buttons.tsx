import React from 'react';
import { Button } from 'hacker-ui';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`

const Buttons = () =>
(
  <div>
    <StyledButton variant="filled">start/stop</StyledButton>
    <StyledButton variant="filled">reset</StyledButton>
  </div>
)

export default Buttons;