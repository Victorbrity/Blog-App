import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { PostList } from './components/posts/PostList';
import { PostEditor } from './components/posts/PostEditor';
import { Post, Author } from './types';

const demoAuthor: Author = {
  id: '1',
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Senior Technical Writer'
};

const initialPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    content: '# Introduction\n\nReact and TypeScript...',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    author: demoAuthor,
    tags: ['React', 'TypeScript', 'Web Development'],
    publishedAt: '2024-03-15T10:00:00Z',
    status: 'published'
  }
];

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const handleSavePost = (postData: Partial<Post>) => {
    if (editingPost) {
      setPosts(posts.map(post => 
        post.id === editingPost.id 
          ? { ...post, ...postData }
          : post
      ));
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        title: postData.title!,
        content: postData.content!,
        excerpt: postData.excerpt!,
        coverImage: postData.coverImage!,
        author: demoAuthor,
        tags: postData.tags || [],
        publishedAt: new Date().toISOString(),
        status: 'draft'
      };
      setPosts([newPost, ...posts]);
    }
    setShowEditor(false);
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Sidebar />
      
      <main className="pl-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between mb-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                Posts
              </h2>
            </div>
          </div>

          <PostList posts={posts} onEditPost={(post) => {
            setEditingPost(post);
            setShowEditor(true);
          }} />

          {showEditor && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
                <h2 className="text-xl font-semibold mb-4">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
                <PostEditor
                  post={editingPost || undefined}
                  onSave={handleSavePost}
                  onClose={() => {
                    setShowEditor(false);
                    setEditingPost(null);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;