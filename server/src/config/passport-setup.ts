import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            callbackURL: '/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ googleId: profile.id });
                if (!user) {
                    user = await new User({
                        googleId: profile.id,
                        name: profile.displayName,
                        profile_photo: profile._json.picture,
                    }).save();
                }
                done(null, user);
            } catch (err) {
                if (err instanceof Error) {
                    done(err, null);
                } else {
                    done(new Error('An unknown error occurred'), null);
                }
            }
        }
    )
);

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});