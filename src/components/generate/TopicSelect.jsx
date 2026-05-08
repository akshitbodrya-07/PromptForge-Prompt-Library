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
    >
        <option value="">Select a topic...</option>
        {topics.map((topic,index) => (
            <option key={index} value={topic}>{topic}</option>
        ))}
    </select>
  )
}

export default TopicSelect
