import React from 'react';
import { containerTemplates } from '../data/templates';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function Sidebar() {
  const categories = Array.from(new Set(containerTemplates.map(t => t.category)));

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      
      {categories.map(category => (
        <div key={category} className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
            {category}
          </h3>
          <div className="space-y-2">
            {containerTemplates
              .filter(t => t.category === category)
              .map(template => {
                const IconComponent = Icons[template.icon as keyof typeof Icons] as LucideIcon;
                
                return (
                  <div
                    key={template.id}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-50 cursor-grab"
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData('template', template.id);
                    }}
                  >
                    <IconComponent className="w-5 h-5 text-gray-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium">{template.name}</p>
                      <p className="text-xs text-gray-500">{template.description}</p>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}