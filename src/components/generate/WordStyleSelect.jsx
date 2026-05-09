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
        className='text-sm rounded-lg px-2 py-2 outline-none flex-1'
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
        }}
    >
        <option value="">Select a wordStyle...</option>
        {wordStyles.map((wordStyle, index) => (
            <option key={index} value={wordStyle}>{wordStyle}</option>
        ))}

    </select>
  )
}

export default WordStyleSelect
