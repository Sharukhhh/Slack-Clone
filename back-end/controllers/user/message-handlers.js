import Message from '../../models/messages.js';



/*
    info: Adding message related to the channel, either creating new or pushing message to exisitng
    path: /api/message/
    method: POST
*/
export const pushMessageToChannel = async (req, res, next) => {
    try {
        
        const {message  , channelId }  = req.body;
        
        const loggedUser = req.user;

        if(!message || !channelId) return res.status(400).json({error: 'Invalid credentials'});

        let channelForMessaging = await Message.findOne({channel: channelId});

        if(!channelForMessaging) { 
            channelForMessaging = await Message.create({
                channel: channelId
            });
        }

        channelForMessaging.message.push({
            body: message,
            sender: loggedUser._id,
        });

        await channelForMessaging.save();
        return res.status(201).json({message: 'Created Successfully' });
        
    } catch (error) {
        next(error);
    }
}


/*
    info: To fetch messages affiliated to the channel
    path: /api/message/get/:id
    method: GET
*/
export const fetchMessagesofTheChannel = async (req, res, next) => {
    try {
        
        const channelId = req.params.channelId;

        const messagesOfChannel = await Message.findOne({channel: channelId})
        .populate('message.sender')
        .populate('message.reciever');
        if(!messagesOfChannel) return res.status(404).json({error: 'No Data found'});

        console.log(messagesOfChannel.message);
        

        return res.status(200).json({messages: messagesOfChannel})

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