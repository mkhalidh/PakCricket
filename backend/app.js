import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv"
import messageRouter from "./router/messageRouter.js"
import cors from "cors"
import emailRouter from './router/emailRouter.js'
const app  = express();
dotenv.config({path: "./config/config.env"})

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true
}))

// Headers.use('Access-Control-Allow-Origin: *')
// Headers.use('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE')
// Headers.use('Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization')

app.use(express.json());
// checking data type
// name mei String 
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/message",messageRouter)
app.use("/api/v1/email",emailRouter)

dbConnection();
export default app;