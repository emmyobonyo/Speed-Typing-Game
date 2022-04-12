import React, { useState } from 'react'
import './App.css';

function App() {  
  const [text, setText] = useState("")
  
  const handleChange = (e) => {
      const {value} = e.target
      setText(value)
  }

  function calculateWordCount(text) {
      const wordsArr = text.trim().split(" ")
      return wordsArr.filter(word => word !== "").length
  }
  
  return (
    <div>
        <h1>How fast do you type?</h1>
        <textarea
            onChange={handleChange}
            value={text}
        />
        <h4>Time remaining: ???</h4>
        <button onClick={() => calculateWordCount(text)}>Start</button>
        <h1>Word count: ???</h1>
    </div>
  )
}

export default App;
