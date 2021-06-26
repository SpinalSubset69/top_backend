import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const staffSchema = new Schema({
    username: String,
    password: String,
    email: String
});


//Encrypt password
staffSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

//Validate Pasword
staffSchema.methods.validatePassword = function(password){
    console.log(this.password)
    return bcrypt.compare(password, this.password); 
};

export default model('Staff', staffSchema);