//en el controlador importamos el modelo 

import User from "../models/user.models.js";
import bcrypt from 'bcryptjs';
import { createTokenAccess } from "../libs/jwt.js";


export const register =  async (req,res)=> {
    // desestructuramos el body que se envia
    const {email,password,username} = req.body;
    //console.log(email,password,username);
    //res.send("Registrando");

    //conexion base de datos
    try {
        //el hash nos sirve para encriptar la contraseña
        const passwordHash = await bcrypt.hash(password, 10);//el numero es la cantidad que va trabajar
        //objeto
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createTokenAccess({id:userSaved._id});
        res.cookie('token', token);//
        //devuelve el objeto
         res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email : userSaved.email
        }) 
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }

};
export const login = (req,res)=>res.send("login");