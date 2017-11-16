import React from 'react'
// import favicon from './img/favicon.png'
// import shareMeta from './content/share-meta'

let styles
if (process.env.NODE_NEV === 'production') {
  try {
    styles = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

const Html = ({ headComponents, body, postBodyComponents }) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      {/* <meta name='viewport' content='width=420, initial-scale=0.76, shrink-to-fit=yes, user-scalable=no' /> */}
      {/* <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' /> */}

      {/* Fonts + Favicon */}
      {/* <link rel='shortcut icon' type='image/png' href={favicon} /> */}

      {/* Put children first to establish tag precedence */}
      { headComponents }

      <title>You Found Ron</title>

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='article:author' content='Ron Gierlach' />

      {/* Facebook open graph meta */}
      {/* <meta property='og:title' content={shareMeta.title} /> */}
      {/* <meta property='og:description' content={shareMeta.description} /> */}
      {/* <meta property='og:url' content={shareMeta.facebook.url} /> */}
      {/* <meta property='og:image' content={shareMeta.facebook.image} /> */}

      {/* Twitter card meta */}
      {/* <meta name='twitter:card' content={shareMeta.twitter.card} /> */}
      {/* <meta name='twitter:site' content={shareMeta.twitter.site} /> */}

      {/* Styles */}
      { process.env.NODE_ENV === 'production'
        ? <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: styles }}
        />
        : null
      }
    </head>
    <body>
      <div id='___gatsby' dangerouslySetInnerHTML={{ __html: body }} />
      { postBodyComponents }
    </body>
  </html>
)

export default Html
