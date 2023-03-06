const User = require('../models/UserModels.js');

const bcrypt = require('bcrypt');

const register = async (req , res, next)=>{
    
    try {
        const {username , email , password, confirmPassword} = req.body;

        const usernamecheck = await User.findOne({username : username});
        if(usernamecheck){
            return res.json({msg : 'user already exist' , status : false})
        }

        const emailcheck = await User.findOne({email: email});
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


const login = async (req , res , next)=>{

    const {email , password } = req.body();
    try {
        const user = await User.findOne({email : email})
        if(!user){
            return res.json({msg : "Incorrect Username or password" , status : false});
        }

        const isPassword = await bcrypt.compare(password , user.password);
        if(!isPassword){
            return res.json({msg : 'Incorrect username or password' , status: false});
        }

        else{
            res.json({
                status: true,
                email : user.email,
                username : user.username,
                id : user._id
            })
        }
        
    } catch (error) {
        next(error)
        
    }
}


module.exports = {register , login}