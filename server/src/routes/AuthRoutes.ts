import express from 'express';
import passport from 'passport';

const router = express.Router();

// Initiate Google authentication
router.get('/google', passport.authenticate('google', {
    // console.log('login with google');
    scope: ['profile', 'email']
}));

// Handle callback after Google has authenticated the user
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

// Check if the user is authenticated
router.get('/check', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ isAuthenticated: true });
    } else {
        res.json({ isAuthenticated: false });
    }
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.redirect('/');
    });
});

export default router;