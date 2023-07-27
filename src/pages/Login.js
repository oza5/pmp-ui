// src/pages/Login.js
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For this example, we'll use a hardcoded username and password for demonstration purposes
    const validUsername = 'testuser';
    const validPassword = 'testpass';

    if (username === validUsername && password === validPassword) {
      // If the username and password match, call the onLogin function to set the user as logged in
      onLogin();
    } else {
      // If the username and password do not match, show an alert (you can implement better error handling)
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Health Screening App</h2>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="dense"
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
