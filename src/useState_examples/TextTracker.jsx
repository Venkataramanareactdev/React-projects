import React, { useState } from 'react'

const TextTracker = () => {
    const [text,setText]=useState("")
  return (
    <div>
      <input
      type='text'
      value={text}
      onChange={(e)=>setText(e.target.value)}
      />
     <p>text : {text}</p>
     <button onClick={()=>setText(" ")}>Clear</button>
    </div>
  )
}

export default TextTracker
