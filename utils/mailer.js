import nodemailer from 'nodemailer'

export const sendMail = (from, fromName, to, toName, subject, body, type = 'text', cc, attachements = []) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_PORT === '465',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  })

  const info = {
    from: `${fromName} <${from}>`,
    to: `${toName} <${to}>`,
    subject: subject,
    [type]: body,
    attachements: attachements
  }

  if (cc) {
    info.cc = cc
  }

  return transporter.sendMail(info)
}
