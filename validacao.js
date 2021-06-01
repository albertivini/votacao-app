const Joi = require('joi');

const usuarioJoi = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
        // configurando que o usuario pode ser alfanumero, com no minimo 3 caracteres e no maximo 3, sendo que esse método é necessário
})

const passwordJoi = Joi.object({
    password: Joi.string()
        .pattern(/^[a-zA-z0-9]{3,30}$/)
        // determina que a senha pode ser de letras minusculas, maiusculas, com numeros e tem de 3 a 30 caracteres
})

const emailJoi = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net' ] } })
        // determina que o email tem que ter no minimo 2 letras no dominio e o com e o net estão liberados
})

module.exports = { usuarioJoi, passwordJoi, emailJoi }