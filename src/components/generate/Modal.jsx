import React from 'react'

function Modal({ prompt, onClose, onCopy, onSave }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
    >
      <div className="w-full max-w-lg p-6 rounded-2xl modal-in"
        style={{
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-lg transition-all hover:opacity-70"
            style={{ color: 'var(--muted)' }}
          >
            ✕
          </button>
        </div>

        {/* Prompt text */}
        <p className="italic leading-relaxed mb-6"
          style={{ color: 'var(--text)' }}
        >
          "{prompt}"
        </p>

        {/* Action buttons */}
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCopy}
            className="px-4 py-2 rounded-full text-sm transition-all btn-press"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#ffffff',
            }}
          >
            Copy
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 rounded-full text-sm transition-all btn-press"
            style={{
              backgroundColor: 'var(--accent2)',
              color: '#ffffff',
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
