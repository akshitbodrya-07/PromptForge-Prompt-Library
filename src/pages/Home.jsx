import { useState } from 'react'
import CategoryCard from '../components/CategoryCard.jsx'
import prompts from '../data/prompts'
import PromptCard from '../components/PromptCard.jsx'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")

    const searchResults = prompts.flatMap((category) =>
        category.subcategories.flatMap((sub) =>
            sub.prompts.filter((prompt) =>
                prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                category.category.toLowerCase().includes(searchQuery.toLowerCase())
            )
        )
    )

    return (
        <div className='max-w-4xl mx-auto px-6 py-10'>
            
            <div className="mb-12 text-center">
                {/* Hero Text */}
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-4"
                    style={{ color: 'var(--text)' }}
                    >
                    Find the perfect
                    <span style={{ 
                        background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        {" "}AI Prompt
                    </span>
                    </h1>
                    <p className="text-lg mb-6"
                    style={{ color: 'var(--muted)' }}
                    >
                    Discover, generate and save professional prompts for any AI platform.
                    Built for internship seekers, creators and learners.
                    </p>
                </div>
                <input
                    type='text'
                    placeholder='Search prompts...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full px-4 py-3 rounded-xl outline-none'
                    style={{
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)'
                    }}  
                />
            </div>

            {/* Search Results */}
            {searchQuery && (
                <div className='mt-6'>
                    <h3 className='text-lg font-semibold text-gray-700 mb-4'>Search Results ({searchResults.length})</h3>
                    {searchResults.map((prompt,index) => (
                        <PromptCard 
                            key={index}
                            text={prompt}
                            onCopy={() => navigator.clipboard.writeText(prompt)}
                            onAction={() => {
                                const saved = JSON.parse(localStorage.getItem("savedPrompts") || "[]")
                                if(saved.includes(prompt)){
                                    alert("Already Saved!")
                                }else{
                                    saved.push(prompt)
                                    localStorage.setItem("savedPrompts", JSON.stringify(saved))
                                    alert("Prompt Saved!")
                                }
                            } }
                            actionLable="Save"
                        />
                    ))}
                </div>
            )}

            {/* Category Cards */}
            <div className='grid grid-cols-5 gap-4'>
                {prompts.map((item) => (
                    <CategoryCard
                    key={item.id}
                    emoji={item.emoji}
                    category={item.category}
                    onClick={() => setSelectedCategory(item)}
                    />
                ))}
            </div>

            <p className="text-center mt-6 text-sm"
                style={{ color: 'var(--text-secondary)' }}
            >
                👆 Click a category to explore prompts
            </p>

            {/* Subcategories */}
            {selectedCategory && (
                <div className="mt-12 mb-8">
                    <div className="text-center mb-8">
                        <span className="text-6xl">{selectedCategory.emoji}</span>
                        <h3 className="text-3xl font-bold mt-3"
                            style={{color: 'var(--text)'}}
                        >
                            {selectedCategory.category}
                        </h3>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {selectedCategory.subcategories.map((sub, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSubCategory(sub)}
                                className="px-4 py-2 rounded-full text-sm transition-all"
                                style={{
                                    backgroundColor: selectedCategory?.name === sub.name
                                    ? 'var(--accent)' : 'var(--card)',
                                    color: selectedCategory?.name === sub.name
                                    ? '#ffffff' : 'var(--muted)',
                                    border: '1px solid var(--border)', 
                                }}
                            >
                                {sub.name}
                            </button>
                    ))}
                </div>
            </div>
            )}

            {/* Prompt Cards */}
            {selectedSubCategory && (
                <div className='mt-10'>

                    {/* Subcategory Header */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold mt-0"
                            style={{ color: 'var(--accent)' }}
                        >
                            {selectedSubCategory.name}
                        </h3>
                        <p className="mt-2"
                            style={{color: 'var(--muted)'}}
                        >
                            {selectedSubCategory.description}
                        </p>
                    </div>

                    {/* Prompt Cards Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {selectedSubCategory.prompts.map((prompt,index) => (
                            <div key={index} 
                                className='relative rounded-2xl p-6 transition-all card-hover'
                                style={{
                                    backgroundColor: 'var(--card)',
                                    border: '1px solid var(--border)',
                                }}
                                >

                                {/* Copy and Save buttons */}
                                <div className='absolute top-4 right-4 flex gap-2'>
                                    <button onClick={() => navigator.clipboard.writeText(prompt)} 
                                            className="text-xs px-3 py-1 rounded-full transition-all btn-press"
                                            style={{
                                                backgroundColor: 'var(--accent)',
                                                color: '#ffffff'
                                            }}
                                            >
                                        Copy
                                    </button>
                                    <button 
                                    onClick={() => {
                                        const saved = JSON.parse(localStorage.getItem("savedPrompts") || "[]")
                                        if(saved.includes(prompt)){
                                            alert("Already Saved!")
                                        }else{
                                            saved.push(prompt)
                                            localStorage.setItem("savedPrompts", JSON.stringify(saved))
                                            alert("Prompt Saved!")
                                        }


                                    }}
                                    className="text-xs px-3 py-1 rounded-full transition-all btn-press"
                                    style={{
                                        backgroundColor: 'var(--accent2)',
                                        color: '#ffffff'
                                    }}
                                    >
                                        Save
                                    </button>
                                </div>

                                {/* Prompt Text */}
                                <p className='italic leading-relaxed mt-6'
                                    style={{color: 'var(--muted)'}}
                                >"{prompt}"</p>

                            </div>
                        ))}
                    </div>

                </div>
            )}

            
        </div>
    )
}

export default Home
