import express from 'express'
import { fetchMessagesforReciever, pushMessageToChannel, searchOnMessages } from '../controllers/user/message-handlers.js';
import { verifyUser } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/send' , verifyUser , pushMessageToChannel);

router.get('/get/:recieverId' , verifyUser, fetchMessagesforReciever);

router.get('/search/:id' , searchOnMessages);

export default router;