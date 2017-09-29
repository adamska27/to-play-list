import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: rgba(223, 62, 123, 0.7) !important;
  &:hover {
    background-color: rgba(223, 62, 123, 1) !important;
  }
`


const Button = (props) => <ButtonStyle type={props.type} className="ui button" onClick={props.onClick}>{props.text}</ButtonStyle>

export default Button
