import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import authenticate from './middlewares/authenticate.js'
import productRouter from './routers/productRouter.js'
import dotenv from "dotenv"
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config()

const mongoDBURI = "mongodb+srv://admin:1234@cluster0.lylqmhs.mongodb.net/?appName=Cluster0"

mongoose.connect(mongoDBURI).then(
    ()=>{
        console.log("Connected with MongoDB successfully")
    }
)

const app = express()

app.use( express.json() )

app.use(authenticate)


app.use("/users" , userRouter)
app.use("/products" , productRouter)

app.listen(
    3000 ,
    ()=>{
        console.log('Server started successfully on port 3000')
         console.log('git hub connected')
    }
)
