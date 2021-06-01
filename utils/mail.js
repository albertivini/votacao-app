module.exports = function(to, subject, text) {

    const mailer = require('nodemailer')

    // fazendo envio via SMTP
    const smtpTransport = mailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: parseInt(process.env.SMTP_PORT),
        secure: false, // mudar depois com STARTTLS
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        }
    })
    
    // variavel guardando mensagem
    const message = {
        from: process.env.SMTP_USERNAME,
        // quem enviou
        to,
        // para quem enviar
        subject,
        // assunto
        text,
        // texto da mensagem como por exemplo html: "<b>Obrigado por se cadastrar</b>"
    }

    // chamando metodo de enviar email
    smtpTransport.sendMail(message, function(error, response) {
        if(error)
            console.log(error)
        else
            console.log("Email enviado: " + response.message)
        smtpTransport.close()
    })
}