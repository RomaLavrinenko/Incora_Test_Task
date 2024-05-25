import React from 'react';
import styles from './Users.module.css';
const UserList = ({ users }) => {

  return (
    <div className={styles.box}>
      {users.map((user) => (
        <div key={user.id} className={styles.userBlock}>
          <div className={styles.userName}>
            <big>{user.id}</big>
            <h2>{user.name}</h2>
          </div>
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
