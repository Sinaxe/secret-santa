const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mccullagh.secret.santa@gmail.com',
    pass: '',
  },
});

// TODO: Check that values passed in are valid
const createMailOptions = (recipient, subject, html) =>
  ({
    from: 'mccullagh.secret.santa@gmail.com',
    to: recipient,
    subject,
    html,
  });

// TODO: add logger and remove console.log statements
const sendEmail = (recipient, subject, htmlMessage) => {
  const mailOptions = createMailOptions(recipient, subject, htmlMessage);
  console.log(transporter);
  return transporter.sendMail(mailOptions)
    .then((info) => {
      console.log('Successfully sent email to', recipient, 'with subject', subject);
      console.log(info);
    })
    .catch((err) => {
      console.log('Error sending email to', recipient, 'with subject', subject);
      console.log(err);
    });
};

module.exports.sendEmail = sendEmail;
