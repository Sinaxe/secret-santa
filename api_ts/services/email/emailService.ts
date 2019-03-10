const nodemailer = require('nodemailer');
const config = require('../../../config/config');

const defaultSubject = 'McCullagh secret santa notification';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.sender,
    pass: config.pass,
  },
});

// TODO: Check that values passed in are valid
const createMailOptions = (recipient: string, subject: string, html: string) =>
  ({
    from: config.sender,
    to: recipient,
    subject,
    html,
  });

// TODO: add logger and remove console.log statements
const sendEmail = (recipient: string, htmlMessage: string, subject: string = defaultSubject) => {
  const mailOptions = createMailOptions(recipient, subject, htmlMessage);
  
  return transporter.sendMail(mailOptions)
    .then((info: any) => {
      console.log('Successfully sent email to', recipient, 'with subject', subject);
      console.log(info);
    })
    .catch((err: any) => {
      console.log('Error sending email to', recipient, 'with subject', subject);
      console.log(err);
    });
};

export { sendEmail as default };
