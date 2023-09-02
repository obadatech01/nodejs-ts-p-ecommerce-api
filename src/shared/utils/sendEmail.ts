/* eslint-disable prettier/prettier */
import nodemailer from 'nodemailer'

const sendEmail = async (options: {email: string, subject: string, message: string}) => {
  const {EMAIL_HOST, EMAIL_PROT, EMAIL_USER, EMAIL_PASSWORD} = process.env;
  // 1) Create transporter ( service that will send email like: gmail, Mailgun, mailtrap, sendGrid)
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PROT, // if secure false port=587, if false port=465
    secure: true,
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    }
  })

  // 2) Define email options (like: from, to, subject, content)
  const mailOptions = {
    from: 'E-shop App <progobadaabumusameh@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
  }

  // 3) Send email
  await transporter.sendMail(mailOptions)
}

export default sendEmail