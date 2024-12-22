import React from 'react';
import { LayoutDashboard, FileText, Tags, Users, Settings } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Posts', icon: FileText },
  { name: 'Tags', icon: Tags },
  { name: 'Authors', icon: Users },
  { name: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 h-screen fixed">
      <nav className="mt-5 px-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href="#"
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <item.icon className="mr-4 h-6 w-6" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}