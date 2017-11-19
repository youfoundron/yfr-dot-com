import React from 'react'
import shareMeta from './content/shareMeta'

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
      <meta name='viewport' content='width=device-width, initial-scale=1.0, shrink-to-fit=no' />

      {/* Fonts + Favicons */}
      <link rel='apple-touch-icon' sizes='57x57' href={require('./content/favicons/apple-icon-57x57.png')} />
      <link rel='apple-touch-icon' sizes='60x60' href={require('./content/favicons/apple-icon-60x60.png')} />
      <link rel='apple-touch-icon' sizes='72x72' href={require('./content/favicons/apple-icon-72x72.png')} />
      <link rel='apple-touch-icon' sizes='76x76' href={require('./content/favicons/apple-icon-76x76.png')} />
      <link rel='apple-touch-icon' sizes='114x114' href={require('./content/favicons/apple-icon-114x114.png')} />
      <link rel='apple-touch-icon' sizes='120x120' href={require('./content/favicons/apple-icon-120x120.png')} />
      <link rel='apple-touch-icon' sizes='144x144' href={require('./content/favicons/apple-icon-144x144.png')} />
      <link rel='apple-touch-icon' sizes='152x152' href={require('./content/favicons/apple-icon-152x152.png')} />
      <link rel='apple-touch-icon' sizes='180x180' href={require('./content/favicons/apple-icon-180x180.png')} />
      <link rel='icon' type='image/png' sizes='192x192' href={require('./content/favicons/android-icon-192x192.png')} />
      <link rel='icon' type='image/png' sizes='32x32' href={require('./content/favicons/favicon-32x32.png')} />
      <link rel='icon' type='image/png' sizes='96x96' href={require('./content/favicons/favicon-96x96.png')} />
      <link rel='icon' type='image/png' sizes='16x16' href={require('./content/favicons/favicon-16x16.png')} />
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content={require('./content/favicons/ms-icon-144x144.png')} />
      <meta name='theme-color' content='#ffffff' />

      {/* Put children first to establish tag precedence */}
      { headComponents }

      <title>You Found Ron</title>
      <meta name='description' content={shareMeta.description} />

      <meta property='og:type' content='website' />
      <meta property='og:locale' content='en_US' />
      <meta property='article:author' content='Ron Gierlach' />

      {/* Facebook open graph meta */}
      <meta property='og:title' content={shareMeta.title} />
      <meta property='og:description' content={shareMeta.description} />
      <meta property='og:url' content={shareMeta.facebook.url} />
      <meta property='og:image' content={shareMeta.facebook.image} />

      {/* Twitter card meta */}
      <meta property='twitter:card' content={shareMeta.twitter.card} />
      <meta property='twitter:site' content={shareMeta.twitter.site} />
      {/* <meta property='twitter:creator' content={shareMeta.twitter.creator} /> */}
      <meta property='twitter:description' content={shareMeta.description} />

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
