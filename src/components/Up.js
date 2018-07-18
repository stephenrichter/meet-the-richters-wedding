import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Arrow = styled(Link)`
  color: ${props => props.theme.colors.base};
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
`

const Up = () => (
  <Arrow to="top" spy smooth duration={300} activeClass="active">
    Back to Top
  </Arrow>
)

export default Up
