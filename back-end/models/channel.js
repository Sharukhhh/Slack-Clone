import mongoose, { Schema } from "mongoose";

const channel = new Schema({

    channel_Title: {
        type: String,
        required: true
    },
 
    workSpace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'workspaces'
    }

}, {timestamps: true});


const channelModel = mongoose.model('channels' , channel);

export default channelModel;