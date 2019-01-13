import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const Wrapper = styled.div`
  margin: 2rem auto 4rem;
  padding: 0 2rem;
  max-width: ${props => props.theme.sizes.maxWidth};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    display: flex;
    justify-content: space-around;
  }
`;

const Card = styled.div`
  border: 1px solid ${props => props.theme.colors.tertiary};
  margin: 0 0 1rem 0;
  border-radius: 2px;
  width: 100%;
  transition: 0.3s;
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 1 45%;
  }
  &:hover {
    transform: translateY(-10px);
  }
  @media (hover: none) {
    transform: none !important;
  }
`;

const Heading = styled.h3`
  font-family: "Noto Serif SC", serif;
  font-size: 1.25em;
  font-weight: 600;
  text-align: center;
  background: ${props => props.theme.colors.secondary};
  padding: 1em;
  border-bottom: 1px solid ${props => props.theme.colors.tertiary};
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 1.75em;
  }
`;

const Text = styled.div`
  padding: 1em;
  font-size: 1.1em;
  line-height: 1.5;
  li {
    list-style: disc;
    list-style-position: inside;
  }
`;

const ButtonLink = styled.div`
  margin: 0 auto;
  text-align: center;

  a {
    transition: 0.3s;
    color: ${props => props.theme.colors.base};
    display: inline-block;
    border: 1px solid ${props => props.theme.colors.tertiary};
    border-radius: 2px;
    font-size: 2.2rem;
    padding: 1rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      border-color: ${props => props.theme.colors.secondary};
      background: ${props => props.theme.colors.secondary};
    }
    @media (hover: none) {
      border-color: ${props => props.theme.colors.tertiary} !important;
      background: none !important;
    }
  }
`;

const Agenda = props => {
  return (
    <Reveal>
      <Wrapper>
        <Card>
          <Heading>{props.heading1}</Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: props.text1.childMarkdownRemark.html
            }}
          />
        </Card>
        <Card>
          <Heading>{props.heading2}</Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: props.text2.childMarkdownRemark.html
            }}
          />
        </Card>
      </Wrapper>
      <ButtonLink>
        <a href="/rsvp">Click here to RSVP</a>
      </ButtonLink>
    </Reveal>
  );
};

export default Agenda;
