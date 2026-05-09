import React, { useState, useEffect } from 'react'
import PromptCard from '../components/PromptCard'

function Saved() {
     const[savedPrompts,setSavedPrompts] = useState([])
     useEffect(() => {
        setSavedPrompts(JSON.parse(localStorage.getItem("savedPrompts") || "[]"))

     },[])
  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
        <h2 className='text-2xl font-bold mb-6'
            style={{color: 'var(--text)'}}
        >
            Your Saved Prompts 📚
        </h2>
        {savedPrompts.map((prompt,index) => (
            <PromptCard 
                key={index}
                text={prompt}
                onCopy={() => navigator.clipboard.writeText(prompt)}
                onAction={() => {
                    const updated = savedPrompts.filter((_,i) => i !== index)
                    setSavedPrompts(updated)
                    localStorage.setItem("savedPrompts",JSON.stringify(updated))
                }}
                actionLable="Delete"
            />
        ))}

    </div>
  )
}

export default Saved
