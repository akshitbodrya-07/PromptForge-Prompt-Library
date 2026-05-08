function CategoryCard({ emoji, category, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-black cursor-pointer transition-all duration-200"
    >
      <span className="text-4xl mb-3">{emoji}</span>
      <h3 className="text-sm font-semibold text-gray-700">{category}</h3>
    </div>
  )
}

export default CategoryCard
