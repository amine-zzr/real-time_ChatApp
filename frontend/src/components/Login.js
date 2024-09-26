import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Grid, Paper, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ClickChat
          </Typography>
          <Button color="inherit" component={Link} to="/register">Register</Button>
        </Toolbar>
      </AppBar>

      {/* Login Form */}
      <Container maxWidth="sm" sx={{ marginTop: '100px' }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            Login
          </Typography>
          <Box component="form" onSubmit={handleLogin}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Log In
            </Button>
          </Box>
          <Typography align="center" sx={{ marginTop: 2 }}>
            Don't have an account? <Button component={Link} to="/register" color="primary">Register here</Button>
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
