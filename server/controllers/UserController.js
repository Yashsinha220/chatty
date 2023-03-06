const User = require('../models/UserModels.js');

const bcrypt = require('bcrypt');

const register = async (req , res, next)=>{
    
    try {
        const {username , email , password, confirmPassword} = req.body;

        const usernamecheck = await User.findone({username : username});
        if(usernamecheck){
            return res.json({msg : 'user already exist' , status : false})
        }

        const emailcheck = await User.findone({email: email});
        if(emailcheck){
            res.json({msg : 'email already exist in the system' , status : false})
        }  
        const hashedPassword = await bcrypt.hash(password , 10);
        const hashedConfirmPassword = await bcrypt.hash(confirmPassword , 10);
        
        const userdata = await User.create({
            username,
            email,
            password : hashedPassword,
            confirmPassword : hashedConfirmPassword
        })

        res.json({
            status: true , 
            email : userdata.email,
            username : userdata.username,

        })

    } catch (error) {
        next(error)
        
    }
}


module.exports = {register}