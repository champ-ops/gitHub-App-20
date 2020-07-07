import React from 'react'
import Markdown from 'markdown-to-jsx'
import { useSelector } from 'react-redux'
import './readme.scss'
import '../assets/scss/main.scss'

const ReadMe = () => {
  const readMe = useSelector((s) => s.data.readme)
  return <Markdown className="markdown-body text-white">{readMe}</Markdown>
}

ReadMe.propTypes = {}

export default ReadMe
