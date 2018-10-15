import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Biography from './Biography'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const Grid = props => {
  console.log(props)
  return (
    <Reveal>
      <GridContainer>
        {props.bios &&
          props.bios.map((bio, index) => (
            <Biography
              name={bio.name}
              position={bio.position}
              website={bio.website}
              instagram={bio.instagram}
              facebook={bio.facebook}
              image={bio.image}
              text={bio.text}
              switch={bio.switch}
            />
        ))}
      </GridContainer>
    </Reveal>
  )
}

export default Grid
