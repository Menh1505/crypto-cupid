import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import './config/passport-setup';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/dating-app', {});

// Middleware
/* app.use(
    session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req: express.Request, res: express.Response) => {
        res.redirect('/dashboard');
    }
);

app.get('/logout', (req: express.Request, res: express.Response) => {
    req.logout((err: any) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.redirect('/');
    });
});

app.get('/dashboard', (req: express.Request, res: express.Response) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.send(`Hello ${(req.user as any).username}`);
}); */

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});