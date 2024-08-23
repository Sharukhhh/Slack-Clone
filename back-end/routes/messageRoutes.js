import express from 'express'
import { fetchMessagesofTheChannel, pushMessageToChannel, searchOnMessages } from '../controllers/user/message-handlers.js';
import { verifyUser } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.post('/' , verifyUser , pushMessageToChannel);

router.get('/get/:id' , fetchMessagesofTheChannel);

router.get('/search/:id' , searchOnMessages);

export default router;