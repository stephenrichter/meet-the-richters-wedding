import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const Title = styled.h2`
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-size: 2rem;
  padding-top: 4rem;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 4rem;
  }
`;

const Text = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;
  max-width: 800px;
  p {
    margin: 0 0 2rem 0;
    &:last-child {
      margin: 0;
    }
  }
  h2 {
    font-family: "Noto Serif SC", serif;
    font-weight: 700;
    font-size: 1.25rem;
    margin: 0 0 0.5rem 0;
    @media screen and (min-width: ${props => props.theme.responsive.medium}) {
      font-size: 1.5rem;
    }
  }
`;

const Body = props => {
  return (
    <Reveal>
      <div>
        <Title>Wedding Details</Title>
        <Text
          dangerouslySetInnerHTML={{
            __html: props.text.childMarkdownRemark.html
          }}
        />
      </div>
    </Reveal>
  );
};

export default Body;
