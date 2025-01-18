import React from 'react';
import { Save, Undo, Redo, Settings, Eye, Code } from 'lucide-react';

export default function Toolbar() {
  const handleExport = () => {
    // This will be connected to Canvas's exportJamstackPrompt
    console.log('Exporting Jamstack prompts...');
  };

  return (
    <div className="h-14 border-b border-gray-200 bg-white px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-semibold">The Container Store</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Undo className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Redo className="w-5 h-5" />
        </button>
        <div className="h-6 w-px bg-gray-200" />
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Eye className="w-5 h-5" />
        </button>
        <button 
          onClick={handleExport}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Code className="w-5 h-5" />
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
          <Save className="w-4 h-4" />
          <span>Save</span>
        </button>
      </div>
    </div>
  );
}