import React from 'react'

function PromptCard({text, onCopy, onAction, actionLable}) {
  return (
        <div className="relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all">

            {/* Buttons top right */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2">
                <button
                onClick={onCopy}
                className="text-xs px-3 py-1 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all"
                >
                Copy
                </button>
                <button
                onClick={onAction}
                className="text-xs px-3 py-1 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all"
                >
                {actionLable}
                </button>
            </div>

            {/* Prompt Text */}
            <p className="italic text-gray-700 leading-relaxed mt-6">
                "{text}"
            </p>

        </div>
  )
}

export default PromptCard
