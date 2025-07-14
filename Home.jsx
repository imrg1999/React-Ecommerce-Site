import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Home = () => {
  const mode = useContext(ThemeContext);

  return (

    <div
      style={{
        backgroundColor: mode === 'dark' ? '#121212' : '#f4f4f4',
        color: mode === 'dark' ? '#ffffff' : '#121212',
        padding: '2rem',
        minHeight: '100vh',
        transition: 'all 0.3s ease'
      }}
    >
      <h1>Home</h1>
      <p>The current mode is <strong>{mode}</strong></p>
    </div>
    
  );
};

export default Home;
