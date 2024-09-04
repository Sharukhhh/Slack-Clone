import mongoose, { Schema } from "mongoose";


const messages = new Schema({

    messageBody: {
        type: String,
        required: true
    },

    recieverChannel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'channels'
    },

    recieverUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },


} , {timestamps: true});


const messageModel = mongoose.model('messages' , messages);
export default messageModel;