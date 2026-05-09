import React from 'react'

const topics = [
    "Cold Email",
    "Cover Letter",
    "Resume",
    "Interview Prep",
    "Content Ideas",
    "Video Script",
    "Blog Post",
    "LinkedIn Post",
    "Daily Planning",
    "Study Plan"
]

const TopicSelect = ({value,onChange}) => {
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
        <option value="">Select a topic...</option>
        {topics.map((topic,index) => (
            <option key={index} value={topic}>{topic}</option>
        ))}
    </select>
  )
}

export default TopicSelect
