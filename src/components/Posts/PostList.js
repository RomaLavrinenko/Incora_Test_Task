import React, { useState, useEffect } from 'react';
import { getPosts } from '../../services/api';
import styles from './Posts.module.css';
import { Link } from 'react-router-dom';

const PostList = ({posts, setPosts}) => {


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className={styles.block}>
        {posts.map((post) => (
          <div className={styles.userBlock} key={post.id}>
            <div className={styles.userName}>
              <big>{post.id}</big>
              <p>{post.title}</p>
            </div>
            <Link to={`/posts/${post.id}`} className={styles.linkBtn}>Details...</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
