import express from 'express';
import userRoutes from './routes/UserRoutes';
import swipeRoutes from './routes/SwipeRoutes';
import matchRoutes from './routes/MatchRoutes';
import messageRoutes from './routes/MessageRoutes';
import blockRoutes from './routes/BlockRoutes';
import reportRoutes from './routes/ReportRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/swipes', swipeRoutes);
app.use('/matches', matchRoutes);
app.use('/messages', messageRoutes);
app.use('/blocks', blockRoutes);
app.use('/reports', reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});