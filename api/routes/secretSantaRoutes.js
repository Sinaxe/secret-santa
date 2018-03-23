const secretSantaController = require('../controllers/secretSantaController');

const secretsanta = (app) => {
  app.route('/secretsanta')
    .post((req, res) => {
      console.log(req.body);
      const secretSantaDistribution = secretSantaController.pickNames(req.body.players);
      res.send(secretSantaDistribution);
    });
};

module.exports = secretsanta;
