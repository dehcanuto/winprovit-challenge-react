import React from 'react';
import { Routes, Route } from 'react-router-dom'
import PostsPage from './pages/posts';

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
    </Routes>
  );
} 