import React from 'react';
import { Post } from '../../types';
import { PostCard } from './PostCard';

interface PostListProps {
  posts: Post[];
  onEditPost: (post: Post) => void;
}

export function PostList({ posts, onEditPost }: PostListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onEdit={onEditPost} />
      ))}
    </div>
  );
}