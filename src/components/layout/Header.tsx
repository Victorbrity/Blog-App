import React from 'react';
import { PenSquare, Layout } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-indigo-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">BlogCMS</h1>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <PenSquare className="h-4 w-4 mr-2" />
            New Post
          </button>
        </div>
      </div>
    </header>
  );
}