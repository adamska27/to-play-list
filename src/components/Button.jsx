import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: rgba(223, 62, 123, 0.7) !important;
  &:hover {
    background-color: #FF6F00 !important;
  }
`


const Button = (props) => <ButtonStyle type={props.type} className={`ui button ${props.className}`} onClick={props.onClick}>{props.text}</ButtonStyle>

export default Button
