exports.loginValidator = (req, res, next) => {
    const { username, password } = req.body
    let errors = {}

    if (!username || username === '') errors.username = 'Username cannot be blank.'
    if (!password || password === '') errors.password = 'Password cannot be blank.'

    if (Object.keys(errors).length === 0) {
        next()
    } else {
        res.status(400).json(errors)
    }
}

exports.registerValidator = (req, res, next) => {
    const { name, email, username, password } = req.body
    let errors = {}

    if (!name || name === '') errors.name = 'Name cannot be blank.'
    if (!email || email === '') errors.email = 'Email cannot be blank.'
    if (!username || username === '') errors.username = 'Username cannot be blank.'
    if (!password || password === '') errors.password = 'Password cannot be blank.'

    if (Object.keys(errors).length === 0) {
        next()
    } else {
        res.status(400).json(errors)
    }
}
