import mongoose from "mongoose";


const admin = mongoose.Schema({

    adminName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

const adminModel = mongoose.model('administration' , admin);

export default adminModel;