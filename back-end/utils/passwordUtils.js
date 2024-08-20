import {compare, hash} from 'bcrypt';

export const makeSecurePassword =  async (userPassword) => {
    const hashedPassword = await hash(userPassword , 10);
    return hashedPassword;
}

export const checkAndComparePassword = async (inputPassword , storedPassword) => {
    return await compare(inputPassword , storedPassword)
}