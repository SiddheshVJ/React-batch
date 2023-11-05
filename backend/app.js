import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import morgan from "morgan";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import gravatar from "gravatar"
import userRoutes from './src/routes/userRoutes'

dotenv.config()

let app = express()
let PORT = process.env.PORT || 3113
let HOST_NAME = process.env.HOST_NAME

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// heartbeat
app.get("/heartbeat", (req, res) => {
    res.status(200).send('<h1>Health is ok...</h1>')
})

app.use('/',userRoutes)

app.listen(PORT, HOST_NAME, (err) => {
    if (err) console.log(err)

    console.log(`Server has started at http://${HOST_NAME}:${PORT}`)
})