// src/models/User.ts
import { Schema, model, Document } from 'mongoose';

export interface IPreferences {
    preferred_gender: string;
    age_min: number;
    age_max: number;
    location_radius_km: number;
}

export interface IPhoto {
    photo_url: string;
    uploaded_at: Date;
}

export interface ILocation {
    latitude: number;
    longitude: number;
    updated_at: Date;
}

export interface IUser extends Document {
    email: string;
    googleId?: string;
    facebookId?: string;
    password_hash?: string;
    name: string;
    birthdate: Date;
    gender: string;
    profile_photo?: string;
    bio?: string;
    created_at: Date;
    updated_at: Date;
    preferences: IPreferences;
    photos?: IPhoto[];
    location?: ILocation;
}

const PreferencesSchema = {
    preferred_gender: { type: String, required: true },
    age_min: { type: Number, required: true },
    age_max: { type: Number, required: true },
    location_radius_km: { type: Number, required: true },
};

const PhotoSchema = {
    photo_url: { type: String, required: true },
    uploaded_at: { type: Date, default: Date.now },
};

const LocationSchema = {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    updated_at: { type: Date, default: Date.now },
};

const UserSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        googleId: { type: String, unique: true },
        facebookId: { type: String, unique: true },
        password_hash: { type: String, required: true },
        name: { type: String, required: true },
        birthdate: { type: Date, required: true },
        gender: { type: String, required: true },
        profile_photo: { type: String },
        bio: { type: String },
        preferences: { type: PreferencesSchema, required: true },
        photos: { type: [PhotoSchema], default: [] },
        location: { type: LocationSchema },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    }
);

const User = model<IUser>('User', UserSchema);

export default User;
