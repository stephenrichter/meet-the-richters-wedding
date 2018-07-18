import React from 'react'
import Hero from './Hero'
import Intro from './Intro'
import Biography from './Biography'
import FilmStrip from './FilmStrip'
import Body from './Body'
import Agenda from './Agenda'
import Divider from './Divider'
import Highlight from './Highlight'

const Modules = props => {
  return (
    <ul>
      {props.modules.map((module, index) => (
        <li key={index}>
          {module.__typename === 'ContentfulHero' && (
            <Hero
              logo={module.logo}
              image={module.image}
              links={module.links}
            />
          )}

          {module.__typename === 'ContentfulIntro' && (
            <div>
              <Intro heading={module.heading} text={module.text} />
            </div>
          )}

          {module.__typename === 'ContentfulBiography' && (
            <Biography
              name={module.name}
              portfolio={module.portfolio}
              instagram={module.instagram}
              facebook={module.facebook}
              image={module.image}
              text={module.text}
              switch={module.switch}
            />
          )}

          {module.__typename === 'ContentfulFilmStrip' && (
            <FilmStrip heading={module.heading} images={module.images} />
          )}

          {module.__typename === 'ContentfulBody' && (
            <Body text={module.text} />
          )}

          {module.__typename === 'ContentfulAgenda' && (
            <Agenda
              heading1={module.heading1}
              text1={module.text1}
              heading2={module.heading2}
              text2={module.text2}
              heading3={module.heading3}
              text3={module.text3}
            />
          )}

          {module.__typename === 'ContentfulHighlight' && (
            <Highlight
              heading1={module.heading1}
              subheading1={module.subheading1}
              heading2={module.heading2}
              subheading2={module.subheading2}
              heading3={module.heading3}
              subheading3={module.subheading3}
            />
          )}

          {module.__typename === 'ContentfulDivider' && (
            <Divider image={module.image} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Modules
