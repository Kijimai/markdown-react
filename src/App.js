import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview")

  return (
    <main>
      <section className="markdown">
        <textarea
          onChange={(e) => setMarkdown(e.target.value)}
          className="input"
          value={markdown}
        >
          {markdown}
        </textarea>
      </section>
      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  )
}

export default App
