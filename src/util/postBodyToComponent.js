import React from 'react'
import Prism from 'prismjs'
import { Parser, ProcessNodeDefinitions } from 'html-to-react'

const postBodyParser = new Parser()

const parentNameClassNamePairs = [
  ['p', 'f5 f4-ns lh-copy georgia'],
  ['a', 'ml0 fw9 link black hover-gold sans-serif'],
  ['blockquote', 'ml0 f6 f5-ns lh-copy i pl4 bl bw1 b--gold mb4']
]

const getLanguageFromNode = node => (
  node.parent.attribs.class.match(/language-(.*)/)[1]
)
const isValidNode = () => true
const isCodeBlock = node => (
  node.name === 'code' &&
  node.parent && node.parent.name === 'pre' &&
  getLanguageFromNode(node)
)
const processNodeDefinitions = new ProcessNodeDefinitions(React)
const processingInstructions = [
  // inject classNames for relevant elements
  ...parentNameClassNamePairs.map(([parentName, className]) => ({
    shouldProcessNode: node => node && node.name === parentName,
    processNode: (node, children, i) => React.createElement(
      node.name,
      {...node.attribs, style: {}, className, key: i},
      children
    )
  })),
  // apply syntax highlighting to code blocks
  {
    shouldProcessNode: isCodeBlock,
    processNode: (node, children, i) => {
      const [ code ] = children
      const language = getLanguageFromNode(node)
      const highlightedHTML = Prism.languages[language]
        ? Prism.highlight(code, Prism.languages[language])
        : code
      const props = {dangerouslySetInnerHTML: {__html: highlightedHTML}, key: i}
      return React.createElement('code', props)
    }
  },
  // Anything else, passthrough
  {
    shouldProcessNode: isValidNode,
    processNode: processNodeDefinitions.processDefaultNode
  }
]

export default body => (
  postBodyParser.parseWithInstructions(
    body,
    isValidNode,
    processingInstructions
  )
)
