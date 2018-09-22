const secretSantaController = require('../controllers/secretSantaController');

const secretsanta = (app) => {
  app.route('/secretsanta')
    .post((req, res) => {
      // payload validation?
      const secretSantaDistribution = secretSantaController(req.body.players);
      res.json(secretSantaDistribution);
    });
};

exports.secretsanta = secretsanta;
