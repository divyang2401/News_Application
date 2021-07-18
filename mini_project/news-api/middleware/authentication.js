const User= require('../models/User')

module.exports = (req, res, next) => {
    console.log(req.headers['authorization'])
    const token = !!req.headers['authorization'] ? req.headers['authorization'].split(' ')[1] : ''

    try {
        User.verifyToken(token)
        next()
    }
    catch (e) {
        res.status(401).json({
            msg: 'Not Authorized'
        })
    }
}