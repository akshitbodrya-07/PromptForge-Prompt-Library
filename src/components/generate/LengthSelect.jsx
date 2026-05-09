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
        className='text-sm rounded-lg px-2 py-2 outline-none flex-1'
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
        }}
    >
        <option value="">Select a length...</option>
        {lengths.map((length, index) => (
            <option key={index} value={length}>{length}</option>
        ))}

    </select>
  )
}

export default LengthSelect
