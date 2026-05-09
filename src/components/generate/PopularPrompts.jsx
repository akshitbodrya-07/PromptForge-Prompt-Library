import React from 'react'

const PopularPrompts = ({prompts, onRead}) => {
  return (
    <div className='mt-10 w-full'>
        {prompts.map((category) => (
            <div key={category.id} className='mb-8'>
                {/* Category heading */}
                <h3 className='text-lg font-bold mb-4'
                    style={{color: 'var(--text)'}}
                >{category.emoji} {category.category}</h3>

                {/* Scrolling row of prompt cards */}
                <div className='overflow-hidden'>
                    <div className='flex gap-4 animate-scroll'>
                        {[...category.popularPrompts, ...category.popularPrompts].map((prompt,index) => (
                            <div key ={index}
                                className='flex-shrink-0 rounded-xl p-4 w-72 flex flex-col card-hover'
                                style={{
                                    backgroundColor: 'var(--card)',
                                    border: '1px solid var(--border)',
                                }}
                            >
                                <p className='text-sm mb-3 line-clamp-2' style={{color: 'var(--muted)'}}>{prompt}</p>
                                <button onClick={() => onRead(prompt)}
                                    className='text-xs px-3 py-1 rounded-full transition-all btn-press'
                                    style={{
                                        backgroundColor: 'var(--accent)',
                                        color: '#ffffff',
                                    }}
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
