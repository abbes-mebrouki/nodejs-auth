const nodemailer = require('nodemailer')

const sendEmail = (options) => {
  const trnasporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth:{
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  })
  const emailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  }

  
  
  trnasporter.sendMail(emailOptions, function(err, info){
    if(err){
      console.error('sending email error: ', err)
    }else{
      console.log('email sent', info.messageId)
    }
  })
}

module.exports = sendEmail