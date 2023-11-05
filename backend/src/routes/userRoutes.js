import express from "express";
import user from '../userData'
import { v4 } from 'uuid'
const router = express.Router()

router.get('/users', (req, res) => {
    res.status(200).json({
        length: user.length,
        user
    })
})

router.get('/user/:id', (req, res) => {
    let userId = req.params.id
    let selectedUser = user.find((user) => {
        return user.id === userId
    })
    res.status(200).json(selectedUser)
})

router.post('/createuser', (req, res) => {
    let newUser = {
        id: v4(),
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    }
    user.push(newUser)
    res.status(200).json({
        msg: `User created`
    })
})

router.put('/user/:id', (req, res) => {
    let userId = req.params.id
    let updatedUser = {
        id: userId,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    }

    let requiredIndex = user.map(user => user.id).indexOf(userId)

    // replace  UpdatedUser
    user.splice(requiredIndex, 1, updatedUser)
    res.status(200).json({
        msg: `User updated`,
        user: updatedUser
    })

})

router.delete('/user/:id', (req, res) => {
    let userId = req.params.id
    let requiredIndex = user.map(user => user.id).indexOf(userId)

    // replace  UpdatedUser
    user.splice(requiredIndex, 1)
    res.status(200).json({
        msg: `User deleted`,
    })
})



module.exports = router // if u missed this line it will throw the TypeError('Router.use() requires a middleware function but got a ' + gettype(fn)) 