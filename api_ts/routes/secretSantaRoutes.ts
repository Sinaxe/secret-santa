import express from 'express';
import handleSecretSantaRequest from '../controllers/secretSantaController';

const router = express.Router();

console.log(handleSecretSantaRequest);
router.post('/', handleSecretSantaRequest);

export { router as default }; 
