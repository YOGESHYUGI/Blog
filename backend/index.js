import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authroutes from "./Routes/authroutes.js"
import blogroutes from "./Routes/blogroutes.js"
 
const app = express()
 
dotenv.config()
 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB")
    } catch (error) {
        throw error
    }
}
 
mongoose.connection.on("disconnected", () => {
    console.log("Disconnected")
})
 
app.use(express.json())
 
app.use("/auths",authroutes)
app.use("/blogs",blogroutes)
 
app.listen(7700, () => {
    connect()
    console.log("Connected to Backend")
})
