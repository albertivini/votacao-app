const Joi = require('joi');

const schema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        // configurando que o usuario pode ser alfanumero, com no minimo 3 caracteres e no maximo 3, sendo que esse método é necessário
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-z0-9]{3,30}$')),

//  repeat_password: Joi.ref('password'),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net' ] } })
    })


module.exports = { schema }