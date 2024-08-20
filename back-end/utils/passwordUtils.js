import bcrypt from 'bcrypt';

export const makeSecurePassword =  async (userPassword) => {
    const hashedPassword = await bcrypt.hash(userPassword , 10);
    return hashedPassword;
}

export const checkAndComparePassword = async (inputPassword , storedPassword) => {
    
    const result = await bcrypt.compare(inputPassword , storedPassword);
    return result;
}