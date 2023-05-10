import React from 'react'

const Header = () => {
  return (
    // Outer Container
    <div>
            <div classname="p-10 min-h-screeen flex items-center bg-indigo-500">
        <div classname="max-w-2xl mx-auto">
          <div className="mb-6 bg-indigo-400 h-full w-40 rounded"></div>
          <div className="flex items-center space-x-6 lg:space-x-12">
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
            <div className="h-20 w-20 bg-white rounded-lg shadow-xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header