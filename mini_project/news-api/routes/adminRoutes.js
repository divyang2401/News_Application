const express = require('express')
const { loginValidator, registerValidator } = require('../middleware/userRouteValidator')
const router = express.Router()


const Admin = require('../models/Admin')


router.post('/login', loginValidator, (req, res) => {
    const { email, password } = req.body

    Admin.findOne({ email })
        .then(admin => { //user = new User()
            if (admin) {
                if (admin.comparePasswordHash(password)) {
                    res.json(admin.generateUserObject())
                } else {
                    res.status(401).json({
                        msg: 'Password doesnot match'
                    })
                }
            } else {
                res.status(404).json({
                    msg: 'User not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/register', registerValidator, (req, res) => {
    const { name, email, password, username } = req.body

    const admin = new Admin()

    admin.name = name
    admin.email = email
    admin.username= username
    admin.generatePasswordHash(password)

    admin.save()
        .then(newUser => {
            res.json(newUser)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router