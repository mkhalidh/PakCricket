import {Email} from '../models/emailSchema.js'

export const sendMail = async (req, res) =>{
    try{
        const {email} = req.body
        if(!email){
            return res.status(400).json({success:false,
                message:"Email field is required for subscriptions"})
        }
        
    await Email.create({email});
    res.status(200).json({success:true, message:"Email sent successfully" })


    }catch(error){
        if(error.name==="ValidationError"){
            let errorMessage =''
         if(error.errors.email){
                errorMessage += error.errors.email.message + " ";
            }
            return res.status(400).json({
                success:false,
                message: errorMessage
            })
        }
        return res.status(500).json({
            success:false,
            message: "Unknown Error"
        })
    }
}