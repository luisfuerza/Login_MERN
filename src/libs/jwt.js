import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export function createTokenAccess(payload){
    return new Promise((resolve,reject) =>{

   
    //estructura del token
    jwt.sign(
        payload,
        TOKEN_SECRET,
        {
            expiresIn: "1d"//duracion token
        },
        (err, token) =>{
            if(err) reject(err);
            resolve(token)
        }
    )
    });
}