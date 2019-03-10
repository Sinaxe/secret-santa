import express from 'express';
import bodyParser from 'body-parser';
import secretSantaRoute from './routes/secretSantaRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/secretsanta', secretSantaRoute);

app.listen(port);

// eslint-disable-next-line prefer-template, no-console
console.log('API server started on: ' + port);
