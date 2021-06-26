import config from '../config/config';
import jwt from 'jsonwebtoken';

const methods = {
    validateToken: (res, token) => {
    //Verify if token was provided in petition   
    if(!token){
      return res.json({auth: false, message: 'No token provided'})
    }

    //Verify if token is valid
    try{
      jwt.verify(token, config.secret);    
    }catch(e){
      if(e.message === 'invalid signature'){
      return res.json({auth: false, message: 'Invalid Token'});
      }
      if(e.message === 'jwt expired'){
        return res.json({auth: false, message: 'Token expired'});
      } 
    }    
    }
}

export default methods;