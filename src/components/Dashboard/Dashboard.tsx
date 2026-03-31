import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { useGetProfileQuery } from '../../services/authApi';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user, token } = useAppSelector((state) => state.auth);
  const { data: profile, isLoading, error } = useGetProfileQuery(undefined, {
    skip: !token, // Пропускаем запрос, если нет токена
  });

  const displayUser = profile || user;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.card}>
        <h3>Welcome to your Dashboard!</h3>
        <p>This is a protected page that only authenticated users can see.</p>
        
        {isLoading && <p>Loading profile...</p>}
        
        {displayUser && (
          <div className={styles.infoCard}>
            <h4>User Information:</h4>
            <p><strong>Name:</strong> {displayUser.name || 'Not set'}</p>
            <p><strong>Email:</strong> {displayUser.email}</p>
            <p><strong>User ID:</strong> {displayUser.id}</p>
            <p><strong>Command ID:</strong> {displayUser.commandId}</p>
            {displayUser.signUpDate && (
              <p><strong>Member Since:</strong> {new Date(displayUser.signUpDate).toLocaleDateString()}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;