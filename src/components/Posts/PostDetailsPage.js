import React from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from './PostDetails';

const PostDetailsPage = () => {
  const { postId } = useParams();

  return (
    <div>
      <h1 style={{backgroundColor:'blue', color:'white', fontSize:'20px', display:'flex', justifyContent:'center', marginBottom:'30px', lineHeight:'80px'}}>Post Details</h1>
      <PostDetails postId={postId} />
    </div>
  );
};

export default PostDetailsPage;
