import mongoose, { model, Schema } from "mongoose";


const workSpace = new Schema({

    workSpace_Name: {
        type: String,
        required: true
    },

    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },   

    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }],

    channels: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'channels'
    }]

}, {timestamps: true});

const workSpaceModel = model('workspaces' , workSpace);

export default workSpaceModel;