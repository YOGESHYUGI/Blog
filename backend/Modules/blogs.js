import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    Heading: {
        type: String,
    },
 
    Desc: {
        type: String,
    },
 
    images:{
        type : Array , 
      default : []
    }
},{ timestamps: true })
 
export default mongoose.model('Blog', BlogSchema)
