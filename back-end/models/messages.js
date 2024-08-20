import mongoose, { Schema } from "mongoose";


const messages = new Schema({

    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'channels'
    },

    
})