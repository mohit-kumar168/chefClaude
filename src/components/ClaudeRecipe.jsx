import React from 'react'
import ReactMarkdown from 'react-markdown'

const ClaudeRecipe = ({ recipe }) => {
  return (
    <section className="suggested-recipe-container mt-10 p-8 bg-gradient-to-br from-yellow-50 to-orange-100 rounded-2xl shadow-lg border border-orange-200 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
        <span role="img" aria-label="chef">👨‍🍳</span>
        Chef Claude Recommends:
      </h2>
      <div className="prose prose-orange max-w-none">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </section>
  )
}

export default ClaudeRecipe
