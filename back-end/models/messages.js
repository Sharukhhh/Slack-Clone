import mongoose, { Schema } from "mongoose";


const messages = new Schema({

    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'channels'
    },

    message: [
        {
            body: {
                type: String
            },

            sender: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },

            reciever: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },

            createdAt: {
                type: Date,
                default: Date.now()
            },
        }
    ]

} , {timestamps: true});


const messageModel = mongoose.model('messages' , messages);
export default messageModel;