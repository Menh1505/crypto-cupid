import express from 'express';
import {
    createUser,
    getUserByGoogleId,
    updateUserByGoogleId,
    deleteUserByGoogleId,
    listUsers
} from '../controllers/UserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const router = express.Router();

// Route to create a new user
router.post('/', createUser);

// Route to get a user by ID
router.get('/:id', getUserByGoogleId);

// Route to update a user by ID
router.put('/:id', updateUserByGoogleId);

// Route to delete a user by ID
router.delete('/:id', deleteUserByGoogleId);

// Route to list all users
router.get('/', listUsers);

export default router;