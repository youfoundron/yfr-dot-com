export default {
  head: {
    title: 'Work',
    meta: [
      { name: 'description', content: 'This is some work.' }
    ],
    links: [
      { rel: 'canonical', href: 'https://youfoundron.com/work' }
    ]
  },
  body: {
    projects: [
      {
        key: 'icostats',
        title: 'ICO Stats: Track ICO Performance',
        url: 'https://icostats.com/',
        description: `
          <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
          <p>A frequently trafficked webapp for purchasing tokens and analyzing ICO statistics. Utilizes <em>React</em>, <em>Redux</em>, <em>Docker</em>, <em>GraphQL</em>, <em>Web3</em>, and the <em>ShapeShift API</em>.</p>
          <p>
            Referenced in <a class='sans-serif link fw9 black hover-gold' href='https://www.forbes.com/sites/chancebarnett/2017/09/23/inside-the-meteoric-rise-of-icos/'>Forbes</a>.
            <br/>
            Shared frequently on <a class='sans-serif link fw9 black hover-gold' href='https://www.reddit.com/r/icocrypto/comments/6ednmu/ico_stats_httpsicostatscom/'>Reddit</a>.
          </p>
        `
      },
      {
        key: 'porsche',
        title: 'Porsche: Only A Sports Car',
        url: 'https://onlyasportscar.com',
        description: `
          <h3 class='mt0 sans-serif tracked-tight'>Front-End Development</h3>
          <p>An animation and analytics heavy micro-site promoting Porsche's spring sportscar lineup, overseen by Cramer-Krasselt and The Uprising Creative. Utilizes <em>React</em>, <em>React Router</em>, <em>Redux Sagas</em>, <em>PostCSS</em>, and <em>GreenSock</em>.</p>
        `
      },
      {
        key: 'sonos',
        title: 'Sonos + Spotify: Playlist Potluck',
        url: 'https://playlistpotluck.sonos.com/',
        description: `
          <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
          <p>A webapp for starting and sharing collaborative playlists with friends overseen by Cornerstone and The Uprising Creative. Utilizes <em>Node</em>, <em>MongoDB</em>, <em>React</em>, <em>Redux</em>, <em>SCSS</em>, and the <em>Spotify API</em>.</p>
          <p>Featured in <a class='sans-serif link fw9 black hover-gold' href='https://techcrunch.com/2016/11/16/spotifys-playlist-potluck-is-a-collaborative-playlist-for-your-parties/'>TechCrunch</a>.</p>
        `
      },
      {
        key: 'nike',
        title: 'Nike: Techknit Interactive Timeline',
        url: 'http://www.niketechknit.com/',
        description: `
          <h3 class='mt0 sans-serif tracked-tight'>Full-Stack Development</h3>
          <p>A blog-embedded interactive piece that allows a user to scrub through over a thousand photos tied to time-stamped biometric data. Overseen by Studio 424 and The Uprising Creative. Utilizes <em>jQuery</em>, <em>SASS</em>, and the <em>FitBit API</em>.</p>
          <p>Featured in <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://news.nike.com/news/nike-tech-knit-nike-sportswear-s-latest-innovation'>Nike News</a>.</p>
        `
      },
      {
        key: 'modestmouse',
        title: 'Modest Mouse: Linguistic Remix Generator',
        url: 'http://strangers.modestmouse.com/',
        description: `
          <h3 class='mt0 sans-serif tracked-tight'>Back-End Development</h3>
          <p>A conceptual interactive webapp for algorithmically generating music. Overseen by The Uprising Creative. Utilizes <em>Node</em>, <em>MongoDB</em>, <em>Ampersand</em>, <em>Web Audio</em>, <em>Canvas</em>, and the <em>Twitter API</em>.</p>
          <p>
            Featured in
            <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://pitchfork.com/news/58885-modest-mouse-launch-strangers-to-ourselves-linguistic-remix-generator/'>Pitchfork</a>
            and
            <a class='sans-serif link fw9 black hover-gold' target='_blank' href='http://www.stereogum.com/1788295/modest-mouse-launch-a-strangers-to-ourselves-linguistic-remix-generator/news/'>Stereogum</a>.
          </p>
        `
      }
    ]
  }
}
