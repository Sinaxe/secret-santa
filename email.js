const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mccullagh.secret.santa@gmail.com',
    pass: '',
  },
});

const mailOptions = {
  from: 'mccullagh.secret.santa@gmail.com',
  to: '',
  subject: 'This is a test message',
  html: '<p>This is a test messsage, sent from nodejs',
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
