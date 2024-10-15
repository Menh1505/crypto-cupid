import { Request, Response } from 'express';
import User from '../models/User';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Get a user by Google ID
export const getUserByGoogleId = async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({ googleId: req.params.googleId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Update a user by Google ID
export const updateUserByGoogleId = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndUpdate({ googleId: req.params.googleId }, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Delete a user by Google ID
export const deleteUserByGoogleId = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneAndDelete({ googleId: req.params.googleId });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// List all users
export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
