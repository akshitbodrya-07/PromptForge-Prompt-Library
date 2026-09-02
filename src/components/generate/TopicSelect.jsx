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
        className='flex-1 min-w-[45%] sm:min-w-0 sm:flex-initial px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white'
    >
        <option value="">Select a topic...</option>
        {topics.map((topic,index) => (
            <option key={index} value={topic}>{topic}</option>
        ))}
    </select>
  )
}

export default TopicSelect
