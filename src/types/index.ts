export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  author: Author;
  tags: string[];
  publishedAt: string;
  status: 'draft' | 'published';
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}