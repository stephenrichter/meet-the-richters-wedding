import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";
import Img from "gatsby-image";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 1rem;

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: 2rem;
  }
`;

const Registry = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem;
  width: 50%;
`;

const RegistryGrid = props => {
  console.log(props);

  return (
    <Reveal>
      <GridContainer>
        <Registry>
          <a href={props.url1} target="_blank" rel="noopener">
            <Img
              sizes={props.image1.sizes}
              alt={props.image1.title}
              title={props.image1.title}
            />
          </a>
        </Registry>
        <Registry>
          <a href={props.url2} target="_blank" rel="noopener">
            <Img
              sizes={props.image2.sizes}
              alt={props.image2.title}
              title={props.image2.title}
            />
          </a>
        </Registry>
      </GridContainer>
    </Reveal>
  );
};

export default RegistryGrid;
