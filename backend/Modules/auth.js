import mongoose from "mongoose";
const AuthSchema = new mongoose.Schema({
    Fname: {
        type: String,
    },
 
    Lname: {
        type: String,
    },
 
    Month: {
        type: String,
    },
 
    Day: {
        type: Number,
    },
 
    Year: {
        type: Number,
    },
 
    Gender: {
        type: String,
    },
 
    email: {
        type: String,
        unique:true        
    },
 
    pass: {
        type: String,
    },
 
    cpass: {
        type: String,
    },

    profile:{
        type : String,
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    } 
},{ timestamps: true })
 
export default mongoose.model('Auth', AuthSchema)
