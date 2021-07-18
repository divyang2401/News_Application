const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



const AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }
}, {
    timestamps: true
})

AdminSchema.statics.verifyToken = function (token) {
    return jwt.verify(token, 'abcd1234')
}

AdminSchema.methods.generateToken = function () {
    const payload = {
        email: this.email,
        username: this.username,
    }

    return jwt.sign(payload, 'abcd1234', {
        expiresIn: '1h'
    })
}

AdminSchema.methods.generateUserObject = function () {
    return {
        username: this.username,
        email: this.email,

        token: this.generateToken()
    }
}

AdminSchema.methods.generatePasswordHash = function (password) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    this.passwordHash = hash
}

AdminSchema.methods.comparePasswordHash = function (password) {
    return bcrypt.compareSync(password, this.passwordHash)
}

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin