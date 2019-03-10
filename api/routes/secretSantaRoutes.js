const express = require('express');
const secretSantaController = require('../controllers/secretSantaController');

const router = express.Router();

router.post('/', secretSantaController.handleSecretSantaRequest);

module.exports = router;
