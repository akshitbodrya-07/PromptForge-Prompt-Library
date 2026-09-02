import React from 'react'

const lengths = [
    "Short",
    "Medium",
    "Long"
]

const LengthSelect = ({value, onChange}) => {
  return (
    <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='flex-1 min-w-[45%] sm:min-w-0 sm:flex-initial px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white'
    >
        <option value="">Select a length...</option>
        {lengths.map((length, index) => (
            <option key={index} value={length}>{length}</option>
        ))}

    </select>
  )
}

export default LengthSelect
