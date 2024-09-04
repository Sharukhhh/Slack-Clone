import Channel from '../../models/channel.js';
import Message from '../../models/messages.js';
import User from '../../models/users.js';



/*
    info: Adding message related to the channel, either creating new or pushing message to exisitng
    path: /api/message/
    method: POST
*/
export const pushMessageToChannel = async (req, res, next) => {
    try {
        
        const {message  , id }  = req.body;

        const loggedUser = req.user;
        let isChannel = true;

        if(!message || !id) return res.status(400).json({error: 'Invalid credentials'});

        let reciever = await Channel.findById(id);
        
        if(!reciever) {
            isChannel = false;
            reciever = await User.findById(id);

            if(!reciever) return res.status(404).json({error: 'Not found'});
        }

        if(isChannel) {
            await Message.create({
                messageBody: message,
                recieverChannel: reciever._id,
                sender: loggedUser?._id
            })

        } else {
            await Message.create({
                messageBody: message,
                recieverUser: reciever._id,
                sender: loggedUser?._id
            })
        }

        return res.status(201).json({message: 'Message sent' });
        
    } catch (error) {
        next(error);
    }
}



/*
    info: To fetch messages affiliated to the channel
    path: /api/message/get/:id
    method: GET
*/
export const fetchMessagesforReciever = async (req, res, next) => {
    try {
        const recieverId = req.params.recieverId;
        const loggedUser = req.user;

        const isChannel = await Channel.findById(recieverId);

        let messages ;

        if(isChannel) {
            messages = await Message.find({recieverChannel: recieverId})
            .populate('recieverChannel')
            .populate('sender');

        } else {
            
            messages = await Message.find({
                $or: [
                    {sender: loggedUser?._id, recieverUser: recieverId},
                    {sender: recieverId , recieverUser: loggedUser?._id}
                ],
                recieverChannel: {$exists: false}
            })
            .populate('recieverUser')
            .populate('sender');
        }

        return res.status(200).json({messages})

    } catch (error) {
        next(error);
    }
}


/*
    info: Search functionality on previous messages
    path: /api/message/search/:id?word=
    path: GET
*/
export const searchOnMessages = async (req, res, next) => {
    try {
        
        const channelId = req.params.id;
        const searchKey = req.query.word;
        

    } catch (error) {
        next(error);
    }
}