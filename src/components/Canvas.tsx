import React, { useState } from 'react';
import { ContainerInstance } from '../types/containers';
import { containerTemplates } from '../data/templates';

export default function Canvas() {
  const [containers, setContainers] = useState<ContainerInstance[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const templateId = e.dataTransfer.getData('template');
    const template = containerTemplates.find(t => t.id === templateId);
    
    if (template) {
      const rect = (e.target as HTMLElement).getBoundingClientRect();
      const newContainer: ContainerInstance = {
        id: Math.random().toString(36).substr(2, 9),
        templateId,
        styles: { ...template.defaultStyles },
        content: null,
        position: {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        }
      };
      
      setContainers([...containers, newContainer]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleContainerClick = (id: string) => {
    setSelectedId(id);
  };

  const exportJamstackPrompt = () => {
    const prompts = containers.map(container => {
      const template = containerTemplates.find(t => t.id === container.templateId);
      return {
        component: template?.name,
        prompt: template?.jamstackPrompt,
        styles: container.styles,
        position: container.position
      };
    });

    return JSON.stringify(prompts, null, 2);
  };

  return (
    <div 
      className="flex-1 bg-gray-50 p-8"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm min-h-[calc(100vh-4rem)] p-8 relative">
        {containers.map(container => (
          <div
            key={container.id}
            style={{
              position: 'absolute',
              left: container.position.x,
              top: container.position.y,
              ...container.styles
            }}
            className={`border transition-colors cursor-pointer ${
              selectedId === container.id 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-gray-200 hover:border-blue-500'
            }`}
            onClick={() => handleContainerClick(container.id)}
          >
            <div className="text-sm text-gray-500">
              {containerTemplates.find(t => t.id === container.templateId)?.name}
            </div>
          </div>
        ))}
      </div>
      
      {selectedId && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-md">
          <h3 className="font-semibold mb-2">Selected Container</h3>
          <pre className="text-xs bg-gray-50 p-2 rounded overflow-auto max-h-40">
            {JSON.stringify(containers.find(c => c.id === selectedId), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}