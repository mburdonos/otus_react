import React from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.card}>
        <h3>Welcome to your Dashboard!</h3>
        <p>This is a protected page that only authenticated users can see.</p>
        <div className={styles.infoCard}>
          <h4>User Information:</h4>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>User ID:</strong> {user?.id}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;