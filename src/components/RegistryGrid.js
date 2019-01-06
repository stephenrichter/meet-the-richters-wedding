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

const Header = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
`;

const RegistryGrid = props => {
  console.log(props);

  return (
    <Reveal>
      <Header>
        <p>Your presence at our wedding is all that we wish for. However, if you want to give a gift, 
        we would be grateful for a small cash donation towards our honeymoon or any items off the registries below.</p>
      </Header>
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
