import { useState } from 'react';

import Info from './components/Info';
import Hand from './components/Hand';
import Register from './components/Register';

function App() {
  return (
    <div className='bg-blue-600 w-screen h-screen p-6'>
      <Info />
      <Hand />
      <Register />
    </div>
  );
}

export default App;
