import React, { useState } from 'react';
import PostList from './PostList';
import PostFormModal from './PostFormModal';
import styles from './Posts.module.css';

const PostsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  
  return (
    <>
      <h1 className={styles.header}>Posts </h1>
      <button onClick={()=> setIsModalOpen(true)} className={styles.linkBtnAdd}>Add New Post</button>
      <PostList  posts={posts} setPosts={setPosts}/>
      {isModalOpen && <PostFormModal onClose={()=> setIsModalOpen(false)} setPosts={setPosts} />} 
    </>
  );
};

export default PostsPage;
