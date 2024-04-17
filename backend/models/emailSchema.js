import mongoose from 'mongoose';
import validator from 'validator'

const emailSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'Email Required'],
        validate:[validator.isEmail,'Please provide valid email']
    },
})


export const Email = mongoose.model("Email",emailSchema);
