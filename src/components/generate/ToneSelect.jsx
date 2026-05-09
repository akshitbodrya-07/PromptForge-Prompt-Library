import React from 'react'

const tones = [
    "Professional",
    "Friendly",
    "Confident",
    "Formal",
    "Casual"
]

const ToneSelect = ({value, onChange}) => {
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
        <option value="">Select a tone...</option>
        {tones.map((tone,index) => (
            <option key={index} value={tone}>{tone}</option>
        ))}
    </select>
  )
}

export default ToneSelect
