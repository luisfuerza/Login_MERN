import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username :{
        type: String,
        required: true,
        trim: true
    }, 
    email:{
        type: String,
        unique: true,
        required: true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps:true //adds createAt and updatedAt fields to the Schema(automaticamente crea 
    //la fecha de creacion y actualizacion en el esquema)

});

export default mongoose.model("User", userSchema);//("nombre del modelo",el esquema que tendra el modelo)