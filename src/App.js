import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './components/Users/UsersPage';
import PostsPage from './components/Posts/PostsPage';
import PostDetailsPage from './components/Posts/PostDetailsPage';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
