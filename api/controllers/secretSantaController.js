const secretSantaService = require('../services/secretSanta/secretSantaService');
const emailService = require('../services/email/emailService');

const handleSecretSantaRequest = (req, res) => {
  const { playerDetails } = req.body;
  const players = playerDetails.map(player => player.name);
  // Get secret santa distribution
  const selections = getSelections(players);

  // Send emails to all players
  sendEmails(selections, playerDetails);

  // Send response back
  res.json(selections);
};

const getSelections = players => secretSantaService.pickNames(players);

const sendEmails = (selections, playerDetails) => {
  // Create email for each person
  // "You have chosen PERSON!"
  let recipientEmail;
  let recipientConnection;
  let emailMessage;
  let recipientInformation;

  const emails = selections.map((selection) => {
    recipientConnection = selection.connection;
    emailMessage = getEmailMessage(recipientConnection);
    console.log(playerDetails);
    recipientInformation = playerDetails.find(playerDetail =>
      playerDetail.name === selection.player);
    console.log(recipientInformation);
    recipientEmail = recipientInformation.email;
    return {
      to: recipientEmail,
      plainText: emailMessage,
    };
  });

  console.log('Now sending emails:', emails);

  // Send emails to service
  emails.forEach(email => emailService.sendEmail(email.to, email.plainText));
};

const getEmailMessage = player => `You have chosen ${player}!`;

module.exports = {
  handleSecretSantaRequest,
};
