import mongoose from 'mongoose';
import validator from 'validator'

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name Required'],
        minLength:[3,'Name must contain 3 characters']
    },
    email:{
        type:String,
        required:[true,'Email Required'],
        validate:[validator.isEmail,'Please provide valid email']
    },
    subject:{
        type:String,
        required:[true,'Subject Required'],
        minLength:[5,'Subject must contain 5 characters']
    },
    message:{
        type:String,
        required:[true,'Message Required'],
        minLength:[10,'Message must contain 3 characters']
    },
})


export const Message = mongoose.model("Message",messageSchema);
