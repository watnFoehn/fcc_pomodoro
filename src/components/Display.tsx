import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Divider = styled.div`
  border-bottom: 2px solid #5C87FF;
`
type Props = {breakLength: number, sessionLength: number}

const Display = (props: Props) =>
(
  <Wrapper>
    <div id="break-label">break length</div>
    <div id="break-length"><h3>{props.breakLength}</h3></div>
    <div id="session-label">session length</div>
    <div id="session-length"><h3>{props.sessionLength}</h3></div>
    <Divider />
    <div id="timer-label"><h2>DYNAMIC TIME LEFT</h2></div>
    <div id="time-left"><h3>DYNAMIC SESSION TYPE</h3></div>
  </Wrapper>
)

export default Display;
