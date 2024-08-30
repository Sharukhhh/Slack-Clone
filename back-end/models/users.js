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
    },

    profileImage: {
        type: String,
        default: 'https://freesvg.org/img/abstract-user-flat-4.png'
    },

    about: {
        type: String
    },


} , {timestamps: true});


const Users = model('users' , userSchema);

export default Users;