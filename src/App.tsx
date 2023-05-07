import React from 'react';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="flex gap-2 p-2">
        <Greet 
          /**
           * when using typed props, i can't asign another properties except the defined one
           * and the key properties.
           * 
           * 
           * the properties also have to be same type with defined one
           */
          name='Hadi' 
          // name=12 // this throw an error
          // anotherValue="hello"  // it also applies
        />
        <Greet name='Ajit'/>
        <Greet name='Agus'/>
      </div>
    </div>
  );
}

export default App;
