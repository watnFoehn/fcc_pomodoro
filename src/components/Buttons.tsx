import React from 'react';
import { Button } from 'hacker-ui';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
`

const StyledButton = styled(Button)`
  margin: 8px;
  padding: 8px;
`

const Buttons = () =>
(
<Wrapper>
    <StyledButton variant="filled">start/stop</StyledButton>
    <StyledButton variant="filled">reset</StyledButton>
</Wrapper>
)

export default Buttons;