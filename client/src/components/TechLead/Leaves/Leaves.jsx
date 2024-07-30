import React from 'react'

const Leaves = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
  <div className="container mx-auto">
    <h1 className="text-3xl font-bold mb-4">Team Leader Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Leave Statistics</h2>
        <p className="text-gray-700">Total Leaves Taken: <span className="font-bold">15</span></p>
        <p className="text-gray-700">Pending Requests: <span className="font-bold">3</span></p>
      </div>
      
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Upcoming Leaves</h2>
        <ul className="list-disc list-inside">
          <li>Jane Doe - July 30, 2024</li>
          <li>John Smith - August 5, 2024</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}

export default Leaves



