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
        default: 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png'
    },

    about: {
        type: String
    },


} , {timestamps: true});


const Users = model('users' , userSchema);

export default Users;