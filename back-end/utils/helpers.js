import User from '../models/users.js';
import Admin from '../models/admin.js'

export const checkForExisingUser = async (userEmail , purpose ) => {

    let user ;
    if(purpose === 'register') {

        user = await User.findOne({email: userEmail});
        if(user) return false;

        if(!user) {
            user = await Admin.findOne({email: userEmail});
            if(user) return false;
        }

    } else {

        user = await User.findOne({email: userEmail});
        if(user) return user;

        user = await Admin.findOne({email: userEmail});
        if(user) return user;
    }
}