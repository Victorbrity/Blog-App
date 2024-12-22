import React from 'react';
import { Post } from '../../types';

interface PostEditorProps {
  post?: Post;
  onSave: (post: Partial<Post>) => void;
  onClose: () => void;
}

export function PostEditor({ post, onSave, onClose }: PostEditorProps) {
  const [formData, setFormData] = React.useState({
    title: post?.title || '',
    content: post?.content || '',
    excerpt: post?.excerpt || '',
    coverImage: post?.coverImage || '',
    tags: post?.tags.join(', ') || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim())
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          required
          rows={8}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Excerpt</label>
        <textarea
          required
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
        <input
          type="url"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.coverImage}
          onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tags (comma-separated)</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          {post ? 'Update Post' : 'Create Post'}
        </button>
      </div>
    </form>
  );
}