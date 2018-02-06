const email = require('./js/email');
const nodemailer = require('nodemailer');

nodemailer.createTransport = nodemailer.createTransport('Stub');
nodemailer.createMailOptions = {
  from: 'from@test.com',
  to: 'to@test.com',
  text: 'This is some text',
};

test('send email with correct mail options', () => {
  const recipient = 'someTestUser';
  const subject = '';
  const message = '';

  email.sendEmail(recipient, subject, message);
});
