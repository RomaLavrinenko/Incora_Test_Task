import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/slices/usersSlice';
import UserList from './UserList';
import styles from './Users.module.css';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    < >
      <header className={styles.header}>
        <h1>Users</h1>
      </header>
      <div className={styles.block}>
        <UserList users={users} />
      </div>
      <Link to={`/posts`} className={styles.linkBtn}>Posts</Link>
      
    </>
  );
};

export default UsersPage;
