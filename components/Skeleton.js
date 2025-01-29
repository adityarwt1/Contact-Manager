import React from 'react'

function Skeleton() {
  return (
    <>
    <div className="border p-2 rounded-md mt-2 shadow-lg animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-8 bg-gray-400 rounded w-20"></div>
    </div>
      <div className="border p-2 rounded-md mt-2 shadow-lg animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-8 bg-gray-400 rounded w-20"></div>
    </div>
      <div className="border p-2 rounded-md mt-2 shadow-lg animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
      <div className="h-8 bg-gray-400 rounded w-20"></div>
    </div>
    </> 
  )
}

export default Skeleton