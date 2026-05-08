import React from 'react'

const PopularPrompts = ({prompts, onRead}) => {
  return (
    <div className='mt-10 w-full'>
        {prompts.map((category) => (
            <div key={category.id} className='mb-8'>
                {/* Category heading */}
                <h3>{category.emoji} {category.category}</h3>

                {/* Scrolling row of prompt cards */}
                <div className='overflow-hidden'>
                    <div className='flex gap-4 animate-scroll'>
                        {[...category.popularPrompts, ...category.popularPrompts].map((prompt,index) => (
                            <div key ={index}
                                className='flex-shrink-0 bg-white border border-gray-200 rounded-xl p-4 w-72 shadow-sm'
                            >
                                <p className='text-sm text-gray-600 mb-3 line-clamp-2'>{prompt}</p>
                                <button onClick={() => onRead(prompt)}
                                    className='text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-all'
                                >
                                    Read
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default PopularPrompts
