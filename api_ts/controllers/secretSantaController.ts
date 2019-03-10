import perfectMatchingAlgorithm from '../services/secretSanta/secretSantaService';
import sendEmail from '../services/email/emailService';
import { Request, Response} from 'express'; 

interface player {
  name: string,
  email: string
}

interface selection {
  connection: string, // TODO: rename "connection" to something more meaningful
  player: string
}

const handleSecretSantaRequest = (req: Request, res: Response) => {
  const { playerDetails } = req.body;
  console.log(playerDetails);
  const players = playerDetails.map((player: player) => player.name);
  // Get secret santa distribution
  const selections = getSelections(players);

  // Send emails to all players
  sendEmails(selections, playerDetails);

  // Send response back
  res.json(selections);
};

const getSelections = (players: string[]) => perfectMatchingAlgorithm(players);

const sendEmails = (selections: selection[], playerDetails: player[]) => {
  // Create email for each person
  // "You have chosen PERSON!"
  let recipientEmail;
  let recipientConnection;
  let emailMessage;
  let recipientInformation;

  const emails = selections.map((selection) => {
    recipientConnection = selection.connection;
    emailMessage = getEmailMessage(recipientConnection);

    recipientInformation = playerDetails.find(playerDetail =>
      playerDetail.name === selection.player);

    recipientEmail = recipientInformation.email;
    return {
      to: recipientEmail,
      plainText: emailMessage,
    };
  });

  console.log('Now sending emails:', emails);

  // Send emails to service
  emails.forEach(email => sendEmail(email.to, email.plainText));
};

const getEmailMessage = (player: string) => `You have chosen ${player}!`;

export { handleSecretSantaRequest as default };
