import React, { useState } from 'react';
import { editComent } from '../../services/api';
import styles from './PostsModal.module.css';

const PostFormModal = ({ setIsModalOpen , comentId, setComments, comments}) => {
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const response = await editComent(comentId, formData);
        const updateComent = response.data;
        setComments(comments.map((comment) => (comment.id === comentId ? updateComent : comment)));
        setIsModalOpen(false); 
        } catch (error) {
        console.error('Error updating post');
      }
  };


  return (
    <div className={styles.modal} style={{ display: 'block' }}>
      <div className={styles['modal-content']} style={{height:'620px'}}>
        <span className={styles.close} onClick={()=> setIsModalOpen(false)}>&times;</span>
        <h2 >Update Coment</h2>
        <div className={styles.formBlock}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
          <label>
            name:
          </label>
          <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputText}
            />
          </div>
          <div className={styles.inputBlock}>
          <label>
            email:
          </label>
          <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.inputText}
            />
          </div>
          <div className={styles.inputBlock}>
          <label>
            Body:
          </label>
          <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              className={styles.inputText}
              style={{height:'160px' , width:"500px" , resize:'none'}}
            />
          </div>
          <div>
          <button type="submit" className={styles.addBtn}>Edit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default PostFormModal;
