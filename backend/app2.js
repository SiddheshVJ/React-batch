import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import morgan from "morgan";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
import gravatar from "gravatar"
import { v4 } from "uuid"

import { mapRoutes } from "./Routes/appRouting";

dotenv.config()
let app = express()
let port = process.env.PORT || 3113
let secretKey = process.env.SECRETE

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// let login data

app.get('/jwt', (req, res) => {

    let user = {
        id: 'Sid123',
        name: 'Siddhesh',
        email: 'sid@gmail.com',
        password: 'Sidd3102'
    }

    let playLoad = {
        user: {
            id: user.id,
            name: user.name
        }
    }

    // create token
    let token = jwt.sign(playLoad, secretKey, { expiresIn: 300000000 })
    console.log(token)

    // decode token at server using this
    let decode = jwt.verify(token, secretKey)
    console.log(decode)
    res.status(200).send("jsonwebtoken")
})

// heartbeat
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

app.get('/gravatar', async (req, res) => {
    let user = {
        id: 'Sid123',
        name: 'Siddhesh',
        email: 'siddheshvjadhav20@gmail.com',
        password: 'Sidd3102'
    }
    let imgUrl = await gravatar.url(user.email, {
        s: '200', // size
        r: 'G', // rating
        d: 'mm'
    })

    user.image = imgUrl
    // console.log(user)
    res.status(200).send(user)
})

app.get('/uuid', (req, res) => {
    let employees = [
        {
            id: v4(),
            name: 'srushti',
            email: 'srushti@gmail.com',
            password: 'Sidd3102'
        },
        {
            id: v4(),
            name: 'Siddhesh',
            email: 'siddheshvjadhav20@gmail.com',
            password: 'Sidd3102'
        },
        {
            id: v4(),
            name: 'Abhishek',
            email: 'Abhishek@gmail.com',
            password: 'Sidd3102'
        },
        {
            id: v4(),
            name: 'Pritam',
            email: 'Pritam@gmail.com',
            password: 'Sidd3102'
        },
    ]
    console.log(employees[1].id)
    res.status(200)
})
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`${port} is running...`)
    }
})