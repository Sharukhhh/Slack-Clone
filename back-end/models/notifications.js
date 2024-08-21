import mongoose from "mongoose";


const notificationScehma = mongoose.Schema({

    content: {
        type: String
    },

    isRead: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    reciever: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});


const notificationModel = mongoose.model('notifications' , notificationScehma);
export default notificationModel;