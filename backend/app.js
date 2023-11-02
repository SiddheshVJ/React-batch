import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config()
let app = express()
let port = process.env.PORT || 3113

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// heartbit

app.get('/heartbit', (req, res) => {
    res.status(200).send("<h1>Health is OK.</h1>")
})

app.post('/encryptpass', (req, res) => {
    let userName = req.query.userName
    let userPass = req.query.userPass
    let salt = bcrypt.genSaltSync(10)
    let hashedPass = bcrypt.hashSync(userPass, salt)
    console.log(hashedPass)
    res.send(hashedPass)
})

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`${port} is running...`)
    }
})