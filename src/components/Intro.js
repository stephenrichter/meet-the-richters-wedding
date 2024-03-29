import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    min-height: 100vh;
  }
`;

const Info = styled.div`
  max-width: 800px;
  padding: 4rem 2rem 2rem;
`;

const Heading = styled.h3`
  font-family: "Noto Serif SC", serif;
  font-size: 1.25em;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 0 2rem 0;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`;

const Text = styled.div`
  position: relative;
  line-height: 1.5;
  margin: 0 0 2rem 0;
  p {
    font-size: 1.1em;
    margin: 0 0 2rem 0;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.25em;
    }
    &:last-child {
      margin: 0;
    }
  }
`;

const Intro = props => {
  return (
    <Wrapper>
      <Reveal>
        <Info>
          <Heading>{props.heading}</Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: props.text.childMarkdownRemark.html
            }}
          />
        </Info>
      </Reveal>
    </Wrapper>
  );
};

export default Intro;
