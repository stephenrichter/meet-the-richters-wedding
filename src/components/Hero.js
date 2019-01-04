import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Helmet from "react-helmet";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const BgImg = styled(Img)`
  @supports (object-fit: cover) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 400px;
    @media (min-width: ${props => props.theme.responsive.medium}) {
      height: 100vh;
    }
    & > img {
      object-fit: ${props => props.fit || "cover"} !important;
      object-position: ${props => props.position || "50% 50%"} !important;
    }
    &::before {
      content: "";
      background: rgba(0, 0, 0, 0.25);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
  }
`;

const Logo = styled.div`
  z-index: 2;
  width: 85%;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Noto Serif SC", serif;
  font-size: 2.5rem;
  text-transform: uppercase;
  z-index: 99;
  position: relative;
  margin-bottom: 0.5rem;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 4.5em;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  font-family: "Noto Serif SC", serif;
  font-size: 1.5em;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 1em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 2em;
  }
`;

const Hero = props => {
  return (
    <Wrapper className="hero">
      <Helmet>
        <meta property="og:image" content={props.image.sizes.src} />
      </Helmet>
      <BgImg
        sizes={props.image.sizes}
        position={props.position}
        alt={props.image.title}
        title={props.image.title}
        backgroundColor={"#aaaea2"}
      />
      <Logo>
        <Title>Caleigh &amp; Stephen</Title>
        <Subtitle>August 31, 2019</Subtitle>
      </Logo>
    </Wrapper>
  );
};

export default Hero;
