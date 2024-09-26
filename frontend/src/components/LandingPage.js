import React from 'react';
import Button from '@mui/material/Button';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { AppBar } from '@mui/material';

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ClickChat
          </Typography>
          <Button color="inherit" href="#features">Features</Button>
          <Button color="inherit" href="#about">About Us</Button>
          <Button color="inherit" href="#contact">Contact Us</Button>
          <Button variant="outlined" color="inherit" href="/register">Join ClickChat</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ marginTop: '100px' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" color="primary">
              Say Hi! To Your Friends & Family
            </Typography>
            <Typography variant="body1" sx={{ marginY: 2 }}>
              Experience seamless communication with ClickChat, your go-to app for secure, real-time chats with those who matter most.
            </Typography>
            <Button variant="contained" color="primary" size="large">Join ClickChat</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={`${process.env.PUBLIC_URL}/tmp-img/cover-landing.jpg`} alt="Chat App" style={{ width: '100%' }} />
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box id="features" sx={{ backgroundColor: '#f5f7fa', padding: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" color="primary" gutterBottom>
            Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <img src={`${process.env.PUBLIC_URL}/tmp-img/one-to-one-chat.PNG`} alt="One-to-One Chat" style={{ width: '100%', height: '80%' }} />
                <Typography variant="h6" color="primary">One-to-One Chat</Typography>
                <Typography>Connect with friends and family privately through our one-to-one chat feature.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <img src={`${process.env.PUBLIC_URL}/tmp-img/group-chat.jpg`} alt="Room Chat" style={{ width: '100%', height: '80%' }} />
                <Typography variant="h6" color="primary">Room Chat</Typography>
                <Typography>Create or join rooms to chat with multiple people at once.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <img src={`${process.env.PUBLIC_URL}/tmp-img/profile-sm-3.jpg`} alt="Profile" style={{ width: '100%', height: '80%' }} />
                <Typography variant="h6" color="primary">Profile</Typography>
                <Typography>Create and customize your personal profile to reflect your personality.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <img src={`${process.env.PUBLIC_URL}/tmp-img/moments-photo.avif`} alt="Coming Soon" style={{ width: '100%', height: '80%' }} />
                <Typography variant="h6" color="primary">Coming Soon</Typography>
                <Typography>Soon, you'll be able to share images and text posts with your friends!</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Container id="about" sx={{ paddingY: 4 }}>
        <Typography variant="h4" color="primary" gutterBottom>About Us</Typography>
        <Typography variant="body1">
          ClickChat is a communication platform built with simplicity, security, and connectivity in mind.
          Whether it's one-to-one messages or group chats, we are here to make your conversations as seamless as possible.
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          Our vision is to create a world where communication is not only easy but also fun, secure, and personalized.
          With ClickChat, you can chat privately, join rooms, and soon share your moments through posts.
        </Typography>
      </Container>

      {/* Contact Us Section */}
      <Box id="contact" sx={{ backgroundColor: '#f5f7fa', padding: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" color="primary" gutterBottom>Contact Us</Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Message" variant="outlined" multiline rows={4} required />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">Send Message</Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#007BFF', padding: 2, color: 'white', textAlign: 'center' }}>
        <Typography variant="body2">© 2024 ClickChat. All rights reserved.</Typography>
      </Box>
    </div>
  );
}

export default LandingPage;
