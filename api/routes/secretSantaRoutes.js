const secretSantaController = require('../controllers/secretSantaController');

const secretsanta = (app) => {
  app.route('/secretsanta')
    .post((req, res) => {
      // payload validation?
      const secretSantaDistribution = secretSantaController.pickNames(req.body.players);
      res.json(secretSantaDistribution);
    });
};

module.exports = secretsanta;
