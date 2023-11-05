import express from "express";

const router = express.Router()

router.get('/users', (req, res) => {
    res.status(200).json({
        msg: "All users info"
    })
})

router.get('/user/:id', (req, res) => {
    let userId = req.params.id
    res.status(200).json({
        msg: `Get user with ${userId}`
    })
})

router.post('/user', (req, res) => {
    let formData = req.body
    res.status(200).json({
        formData: formData
    })
})

router.put('/user/:id', (req, res) => {
    let userId = req.params.id
    let formData = req.body
    res.status(200).json({
        msg: `update user ${userId}`,
        formData: formData
    })
})

router.delete('/user/:id', (req, res) => {
    let userId = req.params.id
    res.status(200).json({
        msg: `deleted user ${userId}`,
        userId : userId
    })
})



module.exports = router // if u missed this line it will throw the TypeError('Router.use() requires a middleware function but got a ' + gettype(fn)) 