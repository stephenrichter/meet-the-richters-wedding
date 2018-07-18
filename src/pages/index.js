import React from 'react'
import styled from 'styled-components'
import Reveal from 'react-reveal/Reveal'
import Modules from '../components/Modules'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Container from '../components/Container'
import { Element } from 'react-scroll'

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  padding: 4rem 0 4rem 0;
  z-index: 99;
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    font-size: 4em;
  }
`

const IndexPage = ({ data }) => {
  const sections = data.allContentfulSection.edges
  const navigation = data.contentfulNavigation

  return (
    <Container>
      <Nav links={navigation.links} />
      {sections.map(({ node: section }) => (
        <Element key={section.id} name={section.slug}>
          {section.heading && (
            <Reveal>
              <Title>{section.heading}</Title>
            </Reveal>
          )}
          <Modules modules={section.modules} />
        </Element>
      ))}
      <Footer />
    </Container>
  )
}

export const query = graphql`
  query Index {
    contentfulNavigation {
      title
      links {
        title
        id
        slug
      }
    }
    allContentfulSection(sort: { fields: [sortOrder], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          sortOrder
          heading
          modules {
            __typename
            ... on ContentfulHero {
              title
              image {
                title
                sizes(maxWidth: 1800) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
            }
            ... on ContentfulIntro {
              title
              heading
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulBiography {
              title
              name
              website
              instagram
              facebook
              image {
                title
                sizes(maxWidth: 1000) {
                  ...GatsbyContentfulSizes_withWebp_noBase64
                }
              }
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
