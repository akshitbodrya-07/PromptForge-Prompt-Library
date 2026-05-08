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
    >
        <option value="">Select a length...</option>
        {lengths.map((length, index) => (
            <option key={index} value={length}>{length}</option>
        ))}

    </select>
  )
}

export default LengthSelect
