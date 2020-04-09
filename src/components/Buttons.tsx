import React from 'react';
import { Button } from 'hacker-ui';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`

type Props = {handleResetButton:Function}

const Buttons = (props:Props) =>
(
  <div>
    <StyledButton variant="filled" id="start_stop">start/stop</StyledButton>
    <StyledButton variant="filled" id="reset" onClick={() => props.handleResetButton()}>reset</StyledButton>
  </div>
)

export default Buttons;