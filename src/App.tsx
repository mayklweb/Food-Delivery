import { useState } from 'react'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="max-w-sm rounded-lg shadow-md border border-gray-200 bg-white">
        {/* Image and Quantity */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/300x200" // Bu yerga rasm URL'sini qo'shing
            alt="Product"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xl font-bold px-2 py-1 rounded">
            4X
          </div>
        </div>

        {/* Product Details */}
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">4 Friends Лестер чиз</h3>
          <p className="text-red-500 text-lg font-bold mt-2">129 000 сум</p>
        </div>

        {/* Add Button */}
        <div className="flex justify-end p-4">
          <button className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.75v14.5m7.25-7.25H4.75"
              />
            </svg>
          </button>
        </div>
      </div>

    </>
  )
}

export default App
