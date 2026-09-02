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
        className='flex-1 min-w-[45%] sm:min-w-0 sm:flex-initial px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white'
    >
        <option value="">Select a wordStyle...</option>
        {wordStyles.map((wordStyle, index) => (
            <option key={index} value={wordStyle}>{wordStyle}</option>
        ))}

    </select>
  )
}

export default WordStyleSelect
