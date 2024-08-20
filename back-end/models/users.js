import { model, Schema } from "mongoose";


const userSchema = new Schema({

    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['online' , 'offline' , 'available' , 'away' , 'in a meeting']
    },

    profileImage: {
        type: String
    },

    about: {
        type: String
    },


} , {timestamps: true});


const Users = model('users' , userSchema);

export default Users;