export default function Loading() {
    
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="h-80 bg-gray-300 rounded-2xl mb-8"></div>

      <div className="h-10 bg-gray-300 rounded w-1/2 mb-4"></div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="h-24 bg-gray-300 rounded-xl"></div>
        <div className="h-24 bg-gray-300 rounded-xl"></div>
        <div className="h-24 bg-gray-300 rounded-xl"></div>
      </div>

      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>

      <div className="h-24 bg-gray-300 rounded"></div>
    </div>
  );
}