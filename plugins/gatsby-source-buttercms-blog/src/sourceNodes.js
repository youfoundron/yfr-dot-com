const crypto = require('crypto')
const butter = require('buttercms')

const typePrefix = 'butter__'
const refactoredEntityTypes = {
  post: `${typePrefix}POST`
}

module.exports = async (
  { boundActionCreators, getNode, hasNodeChanged, store },
  { authToken, listArgs }
) => {
  const { createNode, touchNode, setPluginStatus } = boundActionCreators

  // Authenticate butter api client
  const api = butter(authToken)

  // Touch existing ButterCMS nodes so Gatsby doesn't garbage collect them.
  Object.values(store.getState().nodes)
    .filter(n => n.internal.type.slice(0, 8) === typePrefix)
    .forEach(n => touchNode(n.id))

  // Create nodes here, generally by downloading data from a remote API.
  const postListResult = await api.post.list(listArgs)
  const posts = postListResult.data.data

  // Process data into nodes.
  // Still not sure I understand this part...
  posts.forEach(post => {
    const gatsbyPost = Object.assign({}, post, {
      id: post.slug,
      children: [],
      parent: '__SOURCE__',
      // links: ???
      internal: { type: refactoredEntityTypes.post }
    })

    // get content digest of post
    const contentDigest = crypto
      .createHash('md5')
      .update(JSON.stringify(gatsbyPost))
      .digest('hex')

    gatsbyPost.internal.contentDigest = contentDigest
    createNode(gatsbyPost)
  })

  setPluginStatus({
    status: {
      lastFetched: new Date().toJSON()
    }
  })
}
