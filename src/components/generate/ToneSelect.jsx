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
    >
        <option value="">Select a tone...</option>
        {tones.map((tone,index) => (
            <option key={index} value={tone}>{tone}</option>
        ))}
    </select>
  )
}

export default ToneSelect
