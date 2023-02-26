//instructions
// check usernames and password in post (login) request
// send back to front end
// setup authentication so only request with JWT can have access to dashboard

const jwt = require('jsonwebtoken')
const {BadRequestError} = require('../errors')

const registerSchema = require('../utils/index')


const login = async (req, res) => {
    const {username, password} = req.body

    const validateResult = registerSchema.validate(req.body)

    if(validateResult.error) {
        return res.status(400).json({
            Error: validateResult.error.details[0].message
        })
    }

    //if (!username || !password) {
        // throw new BadRequestError('Please provide username and password')
   // }

    // we have 3 options for validation for username and password
    // Mongoose - when you connect to database 
    // JOI
    //We check it in controller file


    // for demo it's always provided by database
    const id = new Date().getDate()

    // try to keep payload small and better experience user
    // always use long string value for token
    const token = jwt.sign({id, username},process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(200).json({msg: 'user created',token})
}

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100)

        res.status(200).json({msg: `Hello,  ${req.user.username}`, 
                            secret: `Here is the authorized data you requested for, your lucky number is ${luckyNumber}`})


}

module.exports = {
    login, dashboard
}