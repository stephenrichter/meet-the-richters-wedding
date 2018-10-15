import React from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import config from '../utils/siteConfig'
import '../styles/global'
import theme from '../styles/theme'
import favicon from '../images/favicon.ico'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={config.siteDescription} />
        <meta property="og:title" content={config.siteTitle} />
        <meta property="og:url" content={config.siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={config.siteTitle} />
        <link rel="stylesheet" 
          href="https://fonts.googleapis.com/css?family=PT+Serif:400,700|Source+Sans+Pro:400,600|Kaushan+Script" />
        
      </Helmet>

      <ThemeProvider theme={theme}>
        <div className="siteContent">
          {children()}
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Template
