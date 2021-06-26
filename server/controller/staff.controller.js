import Staff from '../models/staff.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import tokenHelper from '../helpers/validateToken';

const controller = {
    create: async (req, res) => {
        const { password, email, username } = req.body;
        const staff = new Staff({
            username,
            email,
            password
        });
        staff.password = await staff.encryptPassword(staff.password);
        await staff.save();

        const token = jwt.sign({ id: staff._id }, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        
        res.json({auth: true, token})
    },

    verifyAccess: async(req, res) => {
        const token = req.headers['x-access-token'];
        if(!token){
            res.status(401).json({auth: false, message: 'No token provided'})
        }

        tokenHelper.validateToken(res, token);

        const decoded = jwt.verify(token, config.secret);
        
        const staff = await Staff.findById(decoded.id, {password: 0});

        if(!staff){
            res.status(404).json({message: 'No user found'})
        }

        res.json({ auth: true ,staff})
    },

    signIn: async (req, res) => {
        const {email , password} = req.body;

        const staff = await Staff.findOne({email: email});

        if(!staff){
            return res.status(404).json({ message: 'Email doesn\'t exists' });
        }

        const isValid = await staff.validatePassword(password);
        console.log(isValid, password);

        if(!isValid){
            return res.status(401).json({auth: isValid, token: null, message: 'Wrong password'});
        }

        const token = jwt.sign({id: staff._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        return res.status(200).json({auth: isValid, token});
    }
}

export default controller;