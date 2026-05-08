import React from 'react'

const Modal = ({prompt, onClose, onCopy, onSave}) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
        
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black transition-all"
          >
            ✕
          </button>
        </div>

        {/* Prompt text */}
        <p className="italic text-gray-700 leading-relaxed mb-6">
          "{prompt}"
        </p>

        {/* Action buttons */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCopy}
            className="px-4 py-2 bg-gray-100 hover:bg-black hover:text-white rounded-full text-sm transition-all"
          >
            Copy
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-gray-100 hover:bg-black hover:text-white rounded-full text-sm transition-all"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  )
}

export default Modal
