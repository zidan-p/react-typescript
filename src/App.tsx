import React from 'react';

function App() {
  return (
    <div className="relative h-screen bg-gray-900">
      <div 
        className="
          absolute 
          top-1/2 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          max-w-xl 
          bg-white 
          p-4 
          rounded
        "
      >
        <h1 className='text-3xl font-bold'>Helloo</h1>
        <p>Hello react typescript with tailwind css</p>
      </div>
    </div>
  );
}

export default App;
