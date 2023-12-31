const jwt = require('jsonwebtoken')

const authMiddleware = async(req, res, next) => {
  try {

    const token = req.header('Authorization')

    jwt.verify(token, process.env.SECRET_TOKEN, (err,user)=> {
        if(err)
            return res.status(404).json({ msg:`token expired..login Again ,UnAUTHORISED TOKEN ,token not found`})
        req.user= user
        next()
     }) 
  } catch (err) {
       return res.status(500).json({msg:err.message})
   }

 }

 module.exports = authMiddleware
