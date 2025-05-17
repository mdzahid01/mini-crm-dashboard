import React, { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <p>Welcome back, <strong>{user}</strong>!</p>
       <Link to='/'> go back Home</Link>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
