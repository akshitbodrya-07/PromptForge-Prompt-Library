function CategoryCard({ emoji, category, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-200 card-hover"
      style={{
        backgroundColor: 'var(--card)',
        border: '1px solid var(--border)',
      }}
    >
      <span className="text-4xl mb-3">{emoji}</span>
      <h3 className="text-sm font-semibold"
          style={{color: 'var(--muted)'}}
      >{category}</h3>
    </div>
  )
}

export default CategoryCard
