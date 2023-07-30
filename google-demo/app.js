import express from 'express';
import passport from 'passport';
import axios from 'axios';
import passportGoogle from 'passport-google-oauth20';
import session from 'express-session';

const app = express();
const PORT = 3000;

const GoogleOAuth2Strategy = passportGoogle.Strategy;

// Replace with your actual Google API credentials
const GOOGLE_CLIENT_ID = '414854105874-8blf55o1lcvvtdp99lgl6qt2pc346gv9.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const REDIRECT_URI = 'http://localhost:3000/google-fit-callback';

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

passport.use(
  new GoogleOAuth2Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: REDIRECT_URI,
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save the access token and other user information in your database here
      // For this example, we won't store the user information; we will only use the access token for API requests
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

// Endpoint to initiate the Google Fit authorization flow
app.get('/google-fit', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/fitness.activity.read'] }));

// Endpoint to handle the Google Fit callback after authorization
app.get('/google-fit-callback', passport.authenticate('google', { failureRedirect: '/google-fit' }), async (req, res) => {
  try {
    // Retrieve the access token from the user's session after successful authentication
    const accessToken = req.user;

    // Now you have the access token, you can use it to make API calls to Google Fit
    // Let's fetch the user's heart points from Google Fit
    const response = await axios.get(
      'https://www.googleapis.com/fitness/v1/users/me/dataSources?dataTypeName=com.google.heart_minutes',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const heartPoints = response.data;
    res.json(heartPoints);
  } catch (error) {
    console.error('Error fetching heart points:', error.message);
    res.status(500).send('Error fetching heart points from Google Fit.');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
