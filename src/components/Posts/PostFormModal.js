import React, { useState } from 'react';
import { addPost } from '../../services/api';
import styles from './PostsModal.module.css';

const PostFormModal = ({ onClose , setPosts}) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addPost(formData);
    onClose();
    setPosts((prevItems) => [...prevItems, response.data])
  };

  return (
    <div className={styles.modal} style={{ display: 'block' }}>
      <div className={styles['modal-content']}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2 >Add New Post</h2>
        <div className={styles.formBlock}>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBlock}>
          <label>
            Title:
          </label>
          <input
              type="text"
              name="title"
              value={formData.title}
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
          <button type="submit" className={styles.addBtn}>Add Post</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default PostFormModal;
