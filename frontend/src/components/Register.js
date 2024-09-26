import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box, Paper, AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle register logic
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ClickChat
          </Typography>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>

      {/* Register Form */}
      <Container maxWidth="sm" sx={{ marginTop: '100px' }}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" color="primary" align="center" gutterBottom>
            Register
          </Typography>
          <Box component="form" onSubmit={handleRegister}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              Register
            </Button>
          </Box>
          <Typography align="center" sx={{ marginTop: 2 }}>
            Already have an account? <Button component={Link} to="/login" color="primary">Log in here</Button>
          </Typography>
        </Paper>
      </Container>
    </>
  );
}

export default Register;
