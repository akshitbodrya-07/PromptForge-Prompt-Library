import React, { useState } from 'react'
import LengthSelect from '../components/generate/LengthSelect'
import ToneSelect from '../components/generate/ToneSelect'
import TopicSelect from '../components/generate/TopicSelect'
import WordStyleSelect from '../components/generate/WordStyleSelect'
import promptTemplates from '../data/promptTemplates'
import { Bookmark, RefreshCw, RotateCcw } from 'lucide-react'
import Modal from '../components/generate/Modal'
import PopularPrompts from '../components/generate/PopularPrompts'
import prompts from '../data/prompts'

function Generate() {

    const [topic, setTopic] = useState("")
    const [tone, setTone] = useState("")
    const [length, setLength] = useState("")
    const [wordStyle, setWordStyle] = useState("")
    const [output, setOutput] = useState("")
    const [activeCategory, setActiveCategory] = useState("")
    const [selectedPrompt, setSelectedPrompt] = useState(null)

    const handleGenerate = () => {
        if (!topic || !tone || !length || !wordStyle){
            alert("Please select all options!")
            return
        }

        const template = promptTemplates[topic]

        const generatedPrompt = `${template.base}. ${template[tone]}. ${template[length]}. ${template[wordStyle]}`
        setOutput(generatedPrompt)
    }
    
  return (
    <div className='w-3/4 mx-auto px-6 py-10 '>
        <h2 className='text-2xl font-bold mb-6' style={{color: 'var(--text)'}}>✨ Generate a Prompt</h2>

        {/* Main Box */}
        <div className='rounded-2xl overflow-hidden mt-6'
            style={{
                border: '1px solid var(--border)',
                backgroundColor: 'var(--surface)',
            }}
        >

            {/* Header — dropdowns + button */}
            <div className='flex items-center gap-3 p-4'
                style={{
                    backgroundColor: 'var(--card)',
                    borderBottom: '1px solid var(--border)',
                }}
            >
                <TopicSelect value={topic} onChange={setTopic} />
                <ToneSelect value={tone} onChange={setTone}/>
                <LengthSelect value={length} onChange={setLength}/>
                <WordStyleSelect value={wordStyle} onChange={setWordStyle}/>

                <button className='ml-auto flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap btn-press'
                        onClick={handleGenerate}
                        style={{
                            background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                            color: '#ffffff',
                        }}
                >
                    Generate
                </button>
            </div>

            {/* Body — output */}
            <div className='p-6 min-h-48'
                style={{ backgroundColor: 'var(--surface)' }}
            >
                {output ? (
                    <p className="italic leading-relaxed"
                        style={{color: 'var(--muted)'}}
                    >
                        "{output}"
                    </p>
                ) : (
                    <p className="italic"
                        style={{color: 'var(--text-secondary)'}}
                    >
                        Select options above and click Generate...
                    </p>
                )}
            </div>

            {output && (
                <div className='flex gap-3 mt-6 justify-end px-2 py-2'>
                    <button
                        onClick={handleGenerate}
                        className='flex items-center gap-1 text-xs px-3 py-2 rounded-full transition-all btn-press'
                        style={{
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--muted)',
                        }}
                    >
                        <RefreshCw size={16}/> Regenerate
                    </button>
                    <button
                        onClick={() => {
                            const saved = JSON.parse(localStorage.getItem("savedPrompts") || "[]")
                            if (saved.includes(output)) {
                                alert("Already Saved!")
                            } else {
                                saved.push(output)
                                localStorage.setItem("savedPrompts", JSON.stringify(saved))
                                alert("Prompt Saved!")
                            }
                        }}
                        className="flex items-center gap-1 text-xs px-3 py-2 rounded-full transition-all btn-press"
                        style={{
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--muted)',
                        }}
                    >
                        <Bookmark size={16}/> Save
                    </button>
                    <button
                        onClick={() => {
                            setOutput("")
                            setTopic("")
                            setTone("")
                            setLength("")
                            setWordStyle("")
                        }}
                        className="flex items-center gap-1 text-xs px-3 py-2 rounded-full transition-all btn-press"
                        style={{
                            backgroundColor: 'var(--card)',
                            border: '1px solid var(--border)',
                            color: 'var(--muted)',
                        }}
                    >
                        <RotateCcw size={16}/> Reset
                    </button>
                </div>
            )}
        </div>

        {/* Popular Prompts */}
        <div className='px-6 py-4'>
            <PopularPrompts
                prompts={prompts}
                onRead={setSelectedPrompt} 
            />
        </div>

        {selectedPrompt && (
            <Modal 
                prompt={selectedPrompt}
                onClose={() => setSelectedPrompt(null)}
                onCopy={() => navigator.clipboard.writeText(selectedPrompt)}
                onSave={() => {
                    const saved = JSON.parse(localStorage.getItem("savedPrompts") || "[]")
                    if(saved.includes(selectedPrompt)){
                        alert("Already Saved!")
                    }else{
                        saved.push(selectedPrompt)
                        localStorage.setItem("savedPrompts", JSON.stringify(saved))
                        alert("Prompt Saved!")
                    }
                }}
            />
        )}
    </div>
  )
}

export default Generate
