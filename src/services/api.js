import axios from 'axios';

export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const getPosts = () => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

export const getPostsBody = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
};

export const getComments = (postId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
};

export const addPost = (postData) => {
  return axios.post('https://jsonplaceholder.typicode.com/posts', postData);
};

export const editComent = (comentId , formData) => {
  return axios.put(`https://jsonplaceholder.typicode.com/comments/${comentId}`, formData);
};

export const deleteComent = (id) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`);
};
