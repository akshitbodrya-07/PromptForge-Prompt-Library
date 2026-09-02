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
        className='flex-1 min-w-[45%] sm:min-w-0 sm:flex-initial px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white'
    >
        <option value="">Select a tone...</option>
        {tones.map((tone,index) => (
            <option key={index} value={tone}>{tone}</option>
        ))}
    </select>
  )
}

export default ToneSelect
