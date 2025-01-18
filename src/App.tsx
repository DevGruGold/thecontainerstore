import React from 'react';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Toolbar />
      <div className="flex-1 flex">
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
}

export default App;