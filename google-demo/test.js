const express = require('express');
const passport = require('passport');
const GoogleOAuth2Strategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();
const PORT = 3000;

// Replace with your actual Google API credentials
const GOOGLE_CLIENT_ID = '414854105874-8blf55o1lcvvtdp99lgl6qt2pc346gv9.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/google-fit-callback';

// Set up session middleware
app.use(
  session({
    secret: 'your_secret_key', // Replace with your session secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Configure the Google OAuth2.0 strategy
passport.use(
  new GoogleOAuth2Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: REDIRECT_URI,
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the user's profile information and tokens in your database
      // For this example, we won't store the profile information; we will only use the tokens for API requests
      return done(null, accessToken);
    }
  )
);

// Serialize user into session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Endpoint to initiate Google OAuth2.0 flow
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback endpoint after successful authentication
app.get('/google-fit-callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // Successful authentication, redirect to a different page or respond with a message
  res.send('Authentication successful!');
});

// Example protected route that requires authentication
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    // Access token is available in req.user (set during the authentication process)
    res.send(`Welcome to your profile! Your access token: ${req.user}`);
  } else {
    res.redirect('/login');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
