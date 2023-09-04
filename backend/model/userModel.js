const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    mobile: {
        type:String,
        trim:true,
        unique:true
    },
    password: {
        type:String,
       trim:true,
       unique:true
    },
    role: {
        type:String,
        default:"user"
    },
    validateEmail: {
        type: Boolean,
        default:false
    },
    validateMobile: {
        type:Boolean,
        default:false
    }
},{
    collection:"users",
    timeStamp:true

})

module.exports = mongoose.model("user",UserSchema)