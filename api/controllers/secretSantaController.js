const secretSantaService = require('../services/secretSantaService');

const secretSantaController = players => secretSantaService.pickNames(players);

module.exports = secretSantaController;
