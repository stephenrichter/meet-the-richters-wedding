import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  margin: 0;
`

const Divider = props => {
  return (
    <Wrapper>
      <Img
        sizes={props.image.sizes}
        alt={props.image.title}
        title={props.image.title}
        backgroundColor={'#aaaea2'}
      />
    </Wrapper>
  )
}

export default Divider
