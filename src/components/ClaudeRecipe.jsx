import React from 'react'
import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section className="suggested-recipe-container mt-8 p-6 bg-white rounded-lg shadow">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  )
}

export default ClaudeRecipe
