import express from "express"
import bodyParser from 'body-parser'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from "cors";
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"

const app=express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Db connected success")
    } catch (error) {
        console.log(error)
    }
};
connectDb()

app.use("/api/user",userRouter)
app.use("/api/product",productRouter)

app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is running...");
})