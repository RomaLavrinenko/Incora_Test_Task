import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getComments, getPostsBody , deleteComent, editComent} from '../../services/api'; 
import ComentsFormModal from './ComentsFormModal'

const PostDetails = () => {
  const { postId } = useParams(); 
  const [comments, setComments] = useState([]);
  const [postBody, setPostBody] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comentsId, setComentsId] = useState(0);
  

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(postId); 
        setComments(response.data);
        const responseBody = await getPostsBody(postId); 
        setPostBody(responseBody.data[0].body);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, [postId]);

  const comentEdit = (id) =>{
    setComentsId(id)
    setIsModalOpen(true);
  }
  const comentDelete = async (comentId) => {
    try {
      const response = await deleteComent();
      setComments(comments.filter((comment) => comment.id !== comentId));
    } catch (error) {
      console.error('Error deleting post');
    }
  };


  return (
    <div>
      <h2 style={{width:'200px', margin:'0 auto'}}> Post Body</h2>
      <div style={{paddingLeft:'10px', border:'1px solid black', lineHeight:'40px', margin:'10px '}}> 
        <p>{postBody}</p>
      </div>
      <h2 style={{width:'300px', margin:'0 auto'}}>Comments for Post №{postId}</h2>
      <div >
        {comments.map((comment) => (
          <div key={comment.id} style={{border:'1px solid black', margin:'10px' , paddingLeft:'10px',display:'flex', justifyContent:'space-between'}} >
              <div>
                <li style={{margin:'10px 0'}}>Name: {comment.name}</li>
                <li style={{margin:'10px 0'}}>Id: {comment.id}</li>
                <li style={{margin:'10px 0'}}>Email: {comment.email}</li>
                <li style={{margin:'10px 0'}}>{comment.body}</li>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <button onClick={()=> comentEdit(comment.id)} style={{width:'100px',height:'30px', borderRadius:'10px' , backgroundColor:'orange', fontSize:'20px', margin:'10px'}}>Edit</button>
                <button onClick={()=> comentDelete(comment.id)} style={{width:'100px',height:'30px', borderRadius:'10px' , backgroundColor:'red',fontSize:'20px' , margin:'10px'}}>Delete</button>
              </div>
          </div>
        ))}
      </div>
      {isModalOpen && <ComentsFormModal setIsModalOpen={setIsModalOpen} comentId={comentsId} setComments={setComments} comments={comments}/>}
    </div>
  );
};

export default PostDetails;
