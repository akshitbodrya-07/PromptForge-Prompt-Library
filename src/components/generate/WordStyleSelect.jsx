import React from 'react'

const wordStyles = [
    "Simple",
    "Complex"
]

function WordStyleSelect({value, onChange}) {
  return (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
    >
        <option value="">Select a wordStyle...</option>
        {wordStyles.map((wordStyle, index) => (
            <option key={index} value={wordStyle}>{wordStyle}</option>
        ))}

    </select>
  )
}

export default WordStyleSelect
