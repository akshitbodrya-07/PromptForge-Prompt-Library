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
        <div className='max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10'>

            {/* Search Bar */}
            <div className='mb-8'>
                <h2 className='text-xl sm:text-2xl text-center font-bold text-gray-800 mb-4'> Find the perfect prompt 🔍</h2>
                <input
                    type='text'
                    placeholder='Search prompts...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-black'
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
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4'>
                {prompts.map((item) => (
                    <CategoryCard
                    key={item.id}
                    emoji={item.emoji}
                    category={item.category}
                    onClick={() => setSelectedCategory(item)}
                    />
                ))}
            </div>

            {/* Subcategories */}
            {selectedCategory && (
                <div className="mt-12 mb-8">
                    <div className="text-center mb-8">
                        <span className="text-6xl">{selectedCategory.emoji}</span>
                        <h3 className="text-3xl font-bold text-gray-800 mt-3">
                            {selectedCategory.category}
                        </h3>
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center">
                        {selectedCategory.subcategories.map((sub, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedSubCategory(sub)}
                                className="px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition-all"
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
                        <h3 className="text-2xl font-bold text-gray-800">
                            {selectedSubCategory.name}
                        </h3>
                        <p className="text-grey-500 mt-2">
                            {selectedSubCategory.description}
                        </p>
                    </div>

                    {/* Prompt Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {selectedSubCategory.prompts.map((prompt,index) => (
                            <div key={index}
                                className='relative bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all'>

                                {/* Copy and Save buttons */}
                                <div className='absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-2'>
                                    <button onClick={() => navigator.clipboard.writeText(prompt)} 
                                            className="text-xs px-3 py-1 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all">
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
                                    className="text-xs px-3 py-1 bg-gray-100 hover:bg-black hover:text-white rounded-full transition-all">
                                        Save
                                    </button>
                                </div>

                                {/* Prompt Text */}
                                <p className='italic text-gray-700 leading-relaxed mt-6'>"{prompt}"</p>

                            </div>
                        ))}
                    </div>

                </div>
            )}

            
        </div>
    )
}

export default Home
