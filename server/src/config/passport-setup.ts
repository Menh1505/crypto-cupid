import passport from 'passport';
// import GoogleStrategy from 'passport-google-oauth20';
import mongoose from 'mongoose';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        function (accessToken: any, refreshToken: any, profile: any, cb: any) {
            /* try {
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = await new User({
                        googleId: profile.id,
                        username: profile.displayName,
                        thumbnail: profile._json.picture,
                    }).save();
                }
                done(null, user);
            } catch (err) {
                done(err, null);
            } */
        }
    )
);

/* passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
}); */