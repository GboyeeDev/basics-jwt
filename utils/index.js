const Joi = require('joi')

const registerSchema = Joi.object().keys({ 
    username: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
 })


 module.exports = registerSchema
