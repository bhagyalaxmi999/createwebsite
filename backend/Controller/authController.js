const User = require('../model/userModel')

const bcrypt = require('bcryptjs')
const { createLoginToken } = require('../util/token')
const jwt = require('jsonwebtoken')


const authController = {
    signup: async(req,res) => {
        try{
            const { name,email,mobile,password } = req.body

            const encPass = await bcrypt.hash(password,10)
            const extEmail = await User.findOne({email})
              if(extEmail) 
              return res.status(404).json({msg:`${email} is already exist`})
            const extMobile = await User.findOne({mobile})
             if(extMobile)
                return res.status(404)  .json({msg:`${mobile} already exists`})

            const newUser =  await User.create({
                name,
                email,mobile,password:encPass
            })
            res.json({msg: `Requested succesfully`, data:newUser})   
        }catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
   login: async(req,res) => {
      try{
        const {email, password} = req.body

        const extUser = await User.findOne({email})
            if(!extUser)
               return res.status(404).json({msg:`${email} does not exists`}) 

         const isMatch = await bcrypt.compare(password,extUser.password) 
         if(!isMatch)   
           return res.status(400).json ({msg:`password not matched`}) 
      
          const token = createLoginToken({id:extUser._id})
      
           res.cookie('loginToken', token, {
            httpOnly: true,
            signed:true,
            path:`api/auth/token`,
            maxAge: 1*24*60*60*1000
           })
           res.json({msg:"login successfully",token})

        }catch(err){
        return res.status(500).json({msg:err.message})
      }
   },
   logout:async (req,res) => {
    try{
         res.clearCookie('loginToken', {path:`/api/auth/token`})
         res.json({msg:'logout successfully'})
    }catch(err){
    return res.status(500).json({msg:err.message})
    }
   },
   currentUser: async (req,res) => {
    try {
        const data = await User.findById({ _id: req.user.id }).select('-password')
            if(!data)
                return res.status(404).json({ msg: `Requested user not found`})

        res.json({ currentUser: data })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
},
authToken: async (req,res) => {
    try {
        const cToken = req.signedCookies.loginToken
            if(!cToken)
                return res.status(404).json({ msg: "Token not found,Session Expired"})

                
                jwt.verify(cToken, process.env.SECRET_TOKEN, (err,user) => {
                    if(err)
                    return res.status(400).json({ msg: `Invalid Token..Un Authorized..`})

                     const rToken = createLoginToken({ id : user.id })

                     res.json({ authToken: rToken })
                })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
},
allUsers: async (req,res) => {
    try {
        const data = await User.find()

        const users = data.filter(item => item.role !== "superadmin")
        
        return res.status(200).json({ length: users.length, users })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}
}

module.exports = authController