import React from 'react'

function PromptCard({text, onCopy, onAction, actionLable}) {
  return (
        <div className="relative rounded-2xl p-6 transition-all card-hover mb-4"
            style={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
            }}
        >
      
            {/* Buttons top right */}
            <div className="absolute top-4 right-4 flex gap-2">
                <button
                onClick={onCopy}
                className="text-xs px-3 py-1 rounded-full transition-all btn-press"
                style={{
                    backgroundColor: 'var(--accent)', 
                    color: '#ffffff'
                }}
                >
                Copy
                </button>
                <button
                onClick={onAction}
                className="text-xs px-3 py-1 rounded-full transition-all btn-press"
                style={{
                    backgroundColor: actionLable === "Delete" ? "#ef4444" : 'var(--accent2)', color: '#ffffff'
                }}
                >
                {actionLable}
                </button>
            </div>

            {/* Prompt Text */}
            <p className="italic leading-relaxed mt-6"
                style={{color: 'var(--text)'}}
            >
                "{text}"
            </p>

        </div>
  )
}

export default PromptCard
