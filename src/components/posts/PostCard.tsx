import React from 'react';
import { Clock, Tag, MoreVertical } from 'lucide-react';
import { Post } from '../../types';
import { formatDate } from '../../utils/date';

interface PostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
}

export function PostCard({ post, onEdit }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img 
        src={post.coverImage} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900">{post.title}</h3>
          <button 
            onClick={() => onEdit(post)}
            className="text-gray-400 hover:text-gray-600"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-gray-600 text-sm">{post.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-6 w-6 rounded-full" 
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {formatDate(post.publishedAt)}
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}